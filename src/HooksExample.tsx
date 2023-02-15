import React from "react";

export function MyHooks({ title, id }: {title: string, id?: string }) {
    //React.useEffect(() => {
    //    console.log('componentDidMount');
    //    console.log('componentWillUpdate');
    //});

    //React.useEffect(() => {
    //    console.log('componentDidMount');
    //    return () => {
    //        console.log('componentWillUpdate');
    //    }
    //}, []);

    //React.useEffect(() => {
    //    console.log('componentWillReceiveProps', title);
    //}, [title]);

    const [isMouted] = useIsMounted();

    React.useEffect(() => {
        console.log('isMounted', isMouted);
    }, [isMouted])
    
    return (
        <div>{title} {id}</div>
    )
}

function useIsMounted() {
    const [isMouted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return [isMouted]
}