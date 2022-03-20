module UsecaseDbControllers
  module Controllers
    # Connect to Usecase DB
    module Helpers
      extend ActiveSupport::Concern

      private

      def connect_usecase_db
        UsecaseRecord.connect
      end

      def disconnect_usecase_db
        UsecaseRecord.disconnect
      end
    end
  end
end
