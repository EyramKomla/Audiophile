type ItemsInBoxProps = {
    qty: number,
    item: string,
}

function ItemsInBox({item, qty}: ItemsInBoxProps) {
  return (
    <div className="min-w-[154px] h-[25px] flex gap-x-5">
        <div className="w-[15px] h-full flex items-center text-[15px] text-primary-brown font-bold">
            <p>{qty}x</p>
        </div>
        <div className="min-w-[115px] h-full flex items-center text-[15px] opacity-50 truncate">
            <p>{item}</p>
        </div>
    </div>
  )
}

export default ItemsInBox