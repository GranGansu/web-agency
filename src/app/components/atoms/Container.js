export default function Container({children, className}){
    return <div className={"max-w-5xl mx-auto px-8 sm:px-0 " +className}>
        {children}
    </div>
}