const TopTrend = [
  {
    src: 'mimCollection/146416864_454196045774516_3779436581273031988_n.png',
    avt: 'url(source/avatar.png)',
    caption: 'Wibu never die',
  },
  {
    src: 'mimCollection/245545926_601516814326028_1385808038578148858_n.png',
    avt: 'url(source/avatar.png)',
    caption: 'Kích thước quan trọng đến thế sao',
  },
  {
    src: 'mimCollection/246736027_929307174647021_6619103308168609391_n.png',
    avt: 'url(source/avatar.png)',
    caption: 'Anh lúc nào cũng quát em',
  },
]

function TopTrending() {
  return (
    <div className='top-trending'>
      <p className='top-trending_name'>Top trending</p>
      <div className='top-trending_overlay'>
        <img src='source/back.png' alt='' className='move' />
        {TopTrend.map((trend, index) => (
          <img
            className='trend'
            id={index}
            key={index}
            src={trend.src}
            alt=''
          ></img>
        ))}
        <img src='source/next.png' alt='' className='move' />
      </div>
    </div>
  )
}

export default TopTrending
