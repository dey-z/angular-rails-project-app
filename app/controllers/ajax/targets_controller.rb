module Ajax
  class TargetsController < UsecaseRecordRestController
    before_action :set_project, only: %i[ show edit update destroy ]

    # GET /ajax/targets
    def index
      @projects = List.all
      render json: @projects, status: :ok
    end

    # POST /ajax/targets
    def create
      @project = List.new(project_params)

      if @project.save
        render json: @project, status: :ok
      else
        render json: @project.errors, status: unprocessable_entity
      end
    end

    # PATCH/PUT /ajax/targets/1
    def update
      if @project.update(project_params)
        render json: @project, status: :ok
      else
        render json: @project.errors, status: unprocessable_entity
      end
    end

    # DELETE /ajax/targets/1
    def destroy
      @project.destroy
      render json: @project, status: :ok
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      # Rails routes :id is recognized so the params have id which is actually project_id in this case
      def set_project
        @project = List.find_by(project_id: params[:project_id]) || List.find_by(project_id: params[:id])
      end

      # Only allow a list of trusted parameters through.
      def project_params
        params.require(:target).permit(:project_id, :project_name, :region)
      end
  end
end
