import time, feedparser, hashlib, os
from homeassistant.components.http import HomeAssistantView
from aiohttp import web

from .manifest import manifest, CURRENT_PATH

class HttpApiView(HomeAssistantView):

    url = "/api/feedreader"
    name = "api:feedreader"
    requires_auth = False

    async def get(self, request):
        file_path =  f"{CURRENT_PATH}/feed-reader.js.gz"
        with open(file_path, 'rb') as f:
            response = web.Response(body=f.read())            
            response.headers['Content-Encoding'] = 'gzip'
            response.headers['Content-Type'] = 'text/javascript'
            return response

    async def post(self, request):
        result = await self.async_validate_access_token(request)
        if result is not None:
            return result

        hass = request.app["hass"]
        body = await request.json()
        
        url = body.get('url')
        # 读取本地文件
        filename = manifest.get_storage_dir(hashlib.md5(url.encode()).hexdigest() + '.xml')
        if os.path.exists(filename):
            url = filename

        d = await hass.async_add_executor_job(feedparser.parse, url)
        feed = d['feed']
        _list = []
        for item in d.entries:
            updated = item.get('updated_parsed', feed.get('updated_parsed'))
            _list.append({
                'id': item['id'],
                'title': item['title'],
                'content': item['summary'],
                'updated': time.strftime('%Y-%m-%d %H:%M:%S', updated)
            })
        return self.json(_list)
    
# region 权限验证

    def get_access_token(self, request):
        authorization = request.headers.get('Authorization')
        return str(authorization).replace('Bearer', '').strip()

    async def async_validate_access_token(self, request):
        ''' 授权验证 '''
        hass = request.app["hass"]
        hass_access_token = self.get_access_token(request)
        token = await hass.auth.async_validate_access_token(hass_access_token)
        if token is None:
            return self.json_message("未授权", status_code=401)

# endregion