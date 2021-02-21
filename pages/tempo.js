function Tempo(props) {
    console.log('> Passando Pelo Fontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTSring();

    return (
        <div>
            <div>{props.staticDateString}(estático)</div>
            <div>{dynamicDateString} (dinâmico)</div>
        </div>
    )

}

export function getStaticProps() {
    console.log('> Passando Pelo getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTStirng();

    return{
        props: {
            staticDateString
        }
    }
}