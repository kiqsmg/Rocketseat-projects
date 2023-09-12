const fs = require("fs");  //module fs para manipular arquivos
const path = require("path");
const uploadConfig = require("../configs/upload");


class DiskStorage {
    async savefile(file) {

        //rename: renomeia arquivo ou mover arquivo
        await fs.promises.rename(
            //path.resolve: resolver uma sequencia de sgmentos de caminho para um caminho absoluto
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        );

        return file;
    }

    async deletefile(file) {
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try {
            //stat retorna o estado do arquivo
            await fs.promises.stat(filePath);
        } catch {
            return;
        }

        //unlink remove um arquivo
        await fs.promises.unlink(filePath);
    }
}


module.exports = DiskStorage;