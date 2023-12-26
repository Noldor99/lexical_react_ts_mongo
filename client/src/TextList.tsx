import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { editorConfig } from "./Editor";
import { useGetTextAllQuery } from "./store/api/textsApi"



const TextList = () => {
  const { data: posts, isLoading } = useGetTextAllQuery()


  return (
    <div>
      {posts?.map((post) => {
        console.log(post)
        const EMPTY_CONTENT = (post.text)
        console.log(EMPTY_CONTENT)
        return (
          <LexicalComposer key={post._id}
            initialConfig={{ ...editorConfig, editable: false, editorState: EMPTY_CONTENT }}
          >
            <div className="editor-inner-read">
              <RichTextPlugin
                contentEditable={<div  >
                  <ContentEditable className="editor-input" />
                </div>}
                placeholder={null}
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>
          </LexicalComposer>
        )
      })}
    </div>
  )
}

export default TextList