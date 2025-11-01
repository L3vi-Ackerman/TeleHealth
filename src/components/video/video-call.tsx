import { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import api from '@/lib/axios'
import { useGetMe } from '@/hooks/auth/me/queries'

interface VideoCallProps {
  roomId?: string
}

export const VideoCall = ({ roomId }: VideoCallProps) => {
  const meetingRef = useRef<HTMLDivElement | null>(null)
  const { data } = useGetMe()
  const user = data?.data
  console.log(user)

  useEffect(() => {
    if (!roomId || !user || !meetingRef.current) return

    const initMeeting = async () => {
      try {
        const res = await api.post(`/gatekeeper/token/zego/`)
        const token = await res?.data.token

        console.log(token)
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
          86436143,
          token,
          roomId,
          user.id,
          user.email,
        )

        const zp = ZegoUIKitPrebuilt.create(kitToken)

        const url = window.location.origin

        zp.joinRoom({
          container: meetingRef.current,
          sharedLinks: [
            {
              name: 'Private Room',
              url: `${url}?roomID=${roomId}`,
            },
          ],
          scenario: { mode: ZegoUIKitPrebuilt.VideoConference },
          turnOnMicrophoneWhenJoining: false,
          turnOnCameraWhenJoining: false,
          showMyCameraToggleButton: true,
          showMyMicrophoneToggleButton: true,
          showAudioVideoSettingsButton: true,
          showScreenSharingButton: true,
          showTextChat: true,
          showUserList: true,
          maxUsers: 50,
          layout: 'Grid',
          showLayoutButton: true,
        })
      } catch (err) {
        console.error('Failed to join meeting:', err)
      }
    }

    initMeeting()
  }, [roomId, user])

  return (
    <div
      ref={meetingRef}
      style={{
        width: '100%',
        height: '600px',
        border: '1px solid #ccc',
        marginBottom: '1rem',
      }}
    />
  )
}
