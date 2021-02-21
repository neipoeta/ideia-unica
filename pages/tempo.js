function Tempo(props) {
    console.log('> Passando Pelo Fontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{props.staticDateString}(estático)</div>
            <div>{dynamicDateString} (dinâmico)</div>
        </div>
    )
 
}

export async function getStaticProps() {
    console.log('> Passando Pelo getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTStirng();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;