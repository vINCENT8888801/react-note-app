import { FC } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import { ThemeModes } from "react-code-blocks/dist/types";


const myAtomOneDark = { ...atomOneDark, mode: 'dark' as ThemeModes };

interface CodeBlockModel {
    code: string;
}


const NoteCodeBlock: FC<CodeBlockModel> = ({ code }) => {

    return (
        <div className="p-4">
            <CopyBlock
                text={code}
                language='javascript'
                showLineNumbers={false}
                startingLineNumber={1}
                wrapLongLines={true}
                theme={myAtomOneDark}
                copied={false}
                onCopy={() => { }}
                codeBlock
            />
        </div>
    )
};

export default NoteCodeBlock;