import Layout from '../../components/layout';

export default function Post(props) {
    return <Layout>
        {props.id}
    </Layout>;
}

// 打包时候被调用
export async function getStaticPaths() {
    // 返回值相当于一个配置，{params里面是路径的参数 id}
    return {
        paths: [{
            params: {
                id: 'ss'
            }
        },{
            params: {
                id: '2'
            }
        }],
        fallback: false

    }
}

export async function getStaticProps(props1) {
    // 被访问时候调用？？？不是ssg吗？？  an：是在dev环境下，getstaticprops和getserversideprops一样，访问就会被调用
    console.log('xx')
    // 这里相当于获取到了getstaticPaths返回的一个项目
    const {params} = props1
    return {
        props: {
            id:params.id
        }
    }
}
