module Ajax
  class UsecaseRecordRestController < ApplicationApiController
    include UsecaseDbControllers::Controllers::Helpers

    before_action :connect_usecase_db
    after_action :disconnect_usecase_db
  end
end
