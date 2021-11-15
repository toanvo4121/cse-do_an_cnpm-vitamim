import variables from '../variables.js'
import ShowThongKe from './ShowThongKe.js'
import ShowRank from './ShowRank.js'

function ShowMim({ Post, CheckRank }) {
  console.log(CheckRank)
  function convert(i) {
    if (i >= 1000) {
      return String((i - (i % 1000)) / 1000) + 'k'
    } else {
      return String(i)
    }
  }
  return (
    <div className='main-content'>
      <div className='main-content_overlay'>
        <div className='post'>
          <div className='main-content_main-title'>
            {Post.map((UserPost, index) => (
              <div className='user-post'>
                <div className='user-info'>
                  <img className='user-avt' src={UserPost.avt} alt='' />
                  <p className='user-name'>{UserPost.ten}</p>
                  {UserPost.ten === variables.Mem.ten &&
                  variables.CheckLogin === 1 ? (
                    ''
                  ) : (
                    <img src='../../public/source/follow-icon.png' alt='' />
                  )}
                  <div className='space'></div>
                  <img className='timer' src='source/clock.png' alt='' />
                  <p className='thoigian'>{UserPost.thoigian} giờ</p>
                </div>
                <p className='status'>
                  {UserPost.stt} {UserPost.hashtag}
                </p>
                <div
                  className='mim'
                  style={{ backgroundImage: UserPost.src }}
                ></div>
                <div className='react'>
                  <div
                    className='react1'
                    style={{ backgroundImage: 'url(source/react1.png)' }}
                  ></div>
                  <div className='count'>{convert(UserPost.quadark)}</div>
                  <div
                    className='react2'
                    style={{ backgroundImage: 'url(source/react2.png)' }}
                  ></div>
                  <div className='count'>{convert(UserPost.soweak)}</div>
                  <img src='source/comment.png' alt='' className='comment' />
                  <div className='count'>{convert(UserPost.comment)}</div>
                  <div className='space'></div>
                  {UserPost.ten === variables.Mem.ten &&
                  variables.CheckLogin === 1 ? (
                    <img src='source/del.png' alt='' className='del-btn' />
                  ) : (
                    <img src='source/report.png' alt='' className='del-btn' />
                  )}
                  {UserPost.ten === variables.Mem.ten &&
                  variables.CheckLogin === 1 ? (
                    <div className='count'>Xóa bài</div>
                  ) : (
                    <div className='count'>Report</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='main-content_thong-ke'>
          {CheckRank === 1 ? <ShowRank /> : <ShowThongKe />}
          <div className='footer'>
            <p>Contact us:</p>
            <img id='fb' src='source/fb.png' alt='' />
            <img id='ig' src='source/ig.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowMim
