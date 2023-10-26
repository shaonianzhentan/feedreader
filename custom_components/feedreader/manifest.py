import os, hashlib
from homeassistant.util.json import load_json
from homeassistant.helpers.storage import STORAGE_DIR
CURRENT_PATH = os.path.dirname(__file__)

class Manifest():

    def __init__(self):
        self.manifest_path = f'{CURRENT_PATH}/manifest.json'
        self.update()

    def update(self):
        data = load_json(self.manifest_path, {})
        self.domain = data.get('domain')
        self.name = data.get('name')
        self.version = data.get('version')
        self.documentation = data.get('documentation')

    def get_filename(self, url):
        return self.get_storage_dir(hashlib.md5(url.encode()).hexdigest() + '.xml')

    def remove_file(self, url):
        filename = self.get_filename(url)
        if os.path.exists(filename):
            os.remove(filename)

    def get_storage_dir(self, file_name):
        folder_path = os.path.abspath(f'{STORAGE_DIR}/feedreader')
        if not os.path.exists(folder_path):
            # 删除配置文件防止出错
            if os.path.isfile(folder_path):
                os.remove(folder_path)
            os.makedirs(folder_path)
        return os.path.join(folder_path, file_name)
    
    def is_url(self, url):
        return url.startswith("http://") or url.startswith("https://")

manifest = Manifest()