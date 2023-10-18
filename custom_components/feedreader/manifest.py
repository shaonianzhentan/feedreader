import os
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

    def get_storage_dir(self, file_name):
        folder_path = os.path.abspath(f'{STORAGE_DIR}/feedreader')
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
        return os.path.join(folder_path, file_name)

manifest = Manifest()