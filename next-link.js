import LinkNext from 'next/link';

const Link = (props) =>{
    const { href,to,className, style, children } = props;
    return <LinkNext href={href || to} passHref {...props}><a className={className || ''} style={style || {} }>{children}</a></LinkNext>
}

export default Link;
