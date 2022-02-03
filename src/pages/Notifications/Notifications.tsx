import React from 'react'
import { Button, Divider, Fab, FlatList, Text } from 'native-base'
import useNotifications from './useNotifications'
import PageContainer from '../../components/PageContainer'
import EventHeader from '../../components/EventHeader/EventHeader'
import HasToUpdate from '../../components/HasToUpdate/HasToUpdate'
import NotificationItem from '../../components/NotificationItem'
import EmptyListRoot from '../../components/EmptyListRoot'
import MaterialIcon from '../../components/MaterialIcon'
import CustomModal from '../../components/CustomModal/CustomModal'

const Notifications = () => {
  const { t, notifications, openConfirmationAll, toggleConfirmation, cleanNotifications } =
    useNotifications()
  return (
    <PageContainer bgColor={'white'}>
      <EventHeader />
      <HasToUpdate />
      {notifications.length === 0 && (
        <EmptyListRoot>
          <Text color="darkText">{t('notifications.no_data')}</Text>
        </EmptyListRoot>
      )}
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={notifications}
        renderItem={({ item }) => <NotificationItem {...item} />}
      />
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        onPress={toggleConfirmation}
        icon={<MaterialIcon color="white" name="delete" size="sm" />}
      />
      <CustomModal
        title={t('notifications.delete_all_confirmation_title')}
        description={t('notifications.delete_all_confirmation_description')}
        isOpen={openConfirmationAll}
        onClose={toggleConfirmation}
        actionBtn={<Button onPress={cleanNotifications}>{t('yes')}</Button>}
      />
    </PageContainer>
  )
}

export default Notifications
