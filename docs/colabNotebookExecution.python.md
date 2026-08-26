# `colabNotebookExecution` Submodule <a name="`colabNotebookExecution` Submodule" id="@cdktn/provider-google.colabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabNotebookExecution <a name="ColabNotebookExecution" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecution(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  gcs_output_uri: str,
  location: str,
  custom_environment_spec: ColabNotebookExecutionCustomEnvironmentSpec = None,
  dataform_repository_source: ColabNotebookExecutionDataformRepositorySource = None,
  deletion_policy: str = None,
  direct_notebook_source: ColabNotebookExecutionDirectNotebookSource = None,
  execution_timeout: str = None,
  execution_user: str = None,
  gcs_notebook_source: ColabNotebookExecutionGcsNotebookSource = None,
  id: str = None,
  notebook_execution_job_id: str = None,
  notebook_runtime_template_resource_name: str = None,
  project: str = None,
  service_account: str = None,
  timeouts: ColabNotebookExecutionTimeouts = None,
  workbench_runtime: ColabNotebookExecutionWorkbenchRuntime = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsOutputUri">gcs_output_uri</a></code> | <code>str</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.customEnvironmentSpec">custom_environment_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dataformRepositorySource">dataform_repository_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.directNotebookSource">direct_notebook_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionTimeout">execution_timeout</a></code> | <code>str</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionUser">execution_user</a></code> | <code>str</code> | The user email to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsNotebookSource">gcs_notebook_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookExecutionJobId">notebook_execution_job_id</a></code> | <code>str</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName">notebook_runtime_template_resource_name</a></code> | <code>str</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.workbenchRuntime">workbench_runtime</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | workbench_runtime block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `gcs_output_uri`<sup>Required</sup> <a name="gcs_output_uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsOutputUri"></a>

- *Type:* str

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `custom_environment_spec`<sup>Optional</sup> <a name="custom_environment_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.customEnvironmentSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#custom_environment_spec ColabNotebookExecution#custom_environment_spec}

---

##### `dataform_repository_source`<sup>Optional</sup> <a name="dataform_repository_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dataformRepositorySource"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#deletion_policy ColabNotebookExecution#deletion_policy}

---

##### `direct_notebook_source`<sup>Optional</sup> <a name="direct_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.directNotebookSource"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionTimeout"></a>

- *Type:* str

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `execution_user`<sup>Optional</sup> <a name="execution_user" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionUser"></a>

- *Type:* str

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `gcs_notebook_source`<sup>Optional</sup> <a name="gcs_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsNotebookSource"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebook_execution_job_id`<sup>Optional</sup> <a name="notebook_execution_job_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookExecutionJobId"></a>

- *Type:* str

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `notebook_runtime_template_resource_name`<sup>Optional</sup> <a name="notebook_runtime_template_resource_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName"></a>

- *Type:* str

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

##### `workbench_runtime`<sup>Optional</sup> <a name="workbench_runtime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.workbenchRuntime"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

workbench_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#workbench_runtime ColabNotebookExecution#workbench_runtime}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec">put_custom_environment_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource">put_dataform_repository_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource">put_direct_notebook_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource">put_gcs_notebook_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putWorkbenchRuntime">put_workbench_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetCustomEnvironmentSpec">reset_custom_environment_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource">reset_dataform_repository_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource">reset_direct_notebook_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout">reset_execution_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser">reset_execution_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource">reset_gcs_notebook_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId">reset_notebook_execution_job_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">reset_notebook_runtime_template_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetWorkbenchRuntime">reset_workbench_runtime</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_environment_spec` <a name="put_custom_environment_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec"></a>

```python
def put_custom_environment_spec(
  machine_spec: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec = None,
  network_spec: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec = None,
  persistent_disk_spec: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec = None,
  shielded_instance_config: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig = None
) -> None
```

###### `machine_spec`<sup>Optional</sup> <a name="machine_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec.parameter.machineSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#machine_spec ColabNotebookExecution#machine_spec}

---

###### `network_spec`<sup>Optional</sup> <a name="network_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec.parameter.networkSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#network_spec ColabNotebookExecution#network_spec}

---

###### `persistent_disk_spec`<sup>Optional</sup> <a name="persistent_disk_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec.parameter.persistentDiskSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#persistent_disk_spec ColabNotebookExecution#persistent_disk_spec}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#shielded_instance_config ColabNotebookExecution#shielded_instance_config}

---

##### `put_dataform_repository_source` <a name="put_dataform_repository_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource"></a>

```python
def put_dataform_repository_source(
  dataform_repository_resource_name: str,
  commit_sha: str = None
) -> None
```

###### `dataform_repository_resource_name`<sup>Required</sup> <a name="dataform_repository_resource_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource.parameter.dataformRepositoryResourceName"></a>

- *Type:* str

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}

---

###### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource.parameter.commitSha"></a>

- *Type:* str

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}

---

##### `put_direct_notebook_source` <a name="put_direct_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource"></a>

```python
def put_direct_notebook_source(
  content: str
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource.parameter.content"></a>

- *Type:* str

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}

---

##### `put_gcs_notebook_source` <a name="put_gcs_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource"></a>

```python
def put_gcs_notebook_source(
  uri: str,
  generation: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource.parameter.uri"></a>

- *Type:* str

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}

---

###### `generation`<sup>Optional</sup> <a name="generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource.parameter.generation"></a>

- *Type:* str

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}.

---

##### `put_workbench_runtime` <a name="put_workbench_runtime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putWorkbenchRuntime"></a>

```python
def put_workbench_runtime(
  vm_image: ColabNotebookExecutionWorkbenchRuntimeVmImage
) -> None
```

###### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putWorkbenchRuntime.parameter.vmImage"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#vm_image ColabNotebookExecution#vm_image}

---

##### `reset_custom_environment_spec` <a name="reset_custom_environment_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetCustomEnvironmentSpec"></a>

```python
def reset_custom_environment_spec() -> None
```

##### `reset_dataform_repository_source` <a name="reset_dataform_repository_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource"></a>

```python
def reset_dataform_repository_source() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_direct_notebook_source` <a name="reset_direct_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource"></a>

```python
def reset_direct_notebook_source() -> None
```

##### `reset_execution_timeout` <a name="reset_execution_timeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout"></a>

```python
def reset_execution_timeout() -> None
```

##### `reset_execution_user` <a name="reset_execution_user" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser"></a>

```python
def reset_execution_user() -> None
```

##### `reset_gcs_notebook_source` <a name="reset_gcs_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource"></a>

```python
def reset_gcs_notebook_source() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notebook_execution_job_id` <a name="reset_notebook_execution_job_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId"></a>

```python
def reset_notebook_execution_job_id() -> None
```

##### `reset_notebook_runtime_template_resource_name` <a name="reset_notebook_runtime_template_resource_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```python
def reset_notebook_runtime_template_resource_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workbench_runtime` <a name="reset_workbench_runtime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetWorkbenchRuntime"></a>

```python
def reset_workbench_runtime() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ColabNotebookExecution resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecution.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecution.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ColabNotebookExecution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ColabNotebookExecution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpec">custom_environment_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource">dataform_repository_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource">direct_notebook_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource">gcs_notebook_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntime">workbench_runtime</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference">ColabNotebookExecutionWorkbenchRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpecInput">custom_environment_spec_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput">dataform_repository_source_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput">direct_notebook_source_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput">execution_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput">execution_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput">gcs_notebook_source_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput">gcs_output_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput">notebook_execution_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">notebook_runtime_template_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntimeInput">workbench_runtime_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser">execution_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri">gcs_output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId">notebook_execution_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName">notebook_runtime_template_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `custom_environment_spec`<sup>Required</sup> <a name="custom_environment_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpec"></a>

```python
custom_environment_spec: ColabNotebookExecutionCustomEnvironmentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecOutputReference</a>

---

##### `dataform_repository_source`<sup>Required</sup> <a name="dataform_repository_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource"></a>

```python
dataform_repository_source: ColabNotebookExecutionDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `direct_notebook_source`<sup>Required</sup> <a name="direct_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource"></a>

```python
direct_notebook_source: ColabNotebookExecutionDirectNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `gcs_notebook_source`<sup>Required</sup> <a name="gcs_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource"></a>

```python
gcs_notebook_source: ColabNotebookExecutionGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts"></a>

```python
timeouts: ColabNotebookExecutionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `workbench_runtime`<sup>Required</sup> <a name="workbench_runtime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntime"></a>

```python
workbench_runtime: ColabNotebookExecutionWorkbenchRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference">ColabNotebookExecutionWorkbenchRuntimeOutputReference</a>

---

##### `custom_environment_spec_input`<sup>Optional</sup> <a name="custom_environment_spec_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpecInput"></a>

```python
custom_environment_spec_input: ColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---

##### `dataform_repository_source_input`<sup>Optional</sup> <a name="dataform_repository_source_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```python
dataform_repository_source_input: ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `direct_notebook_source_input`<sup>Optional</sup> <a name="direct_notebook_source_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput"></a>

```python
direct_notebook_source_input: ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_timeout_input`<sup>Optional</sup> <a name="execution_timeout_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput"></a>

```python
execution_timeout_input: str
```

- *Type:* str

---

##### `execution_user_input`<sup>Optional</sup> <a name="execution_user_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput"></a>

```python
execution_user_input: str
```

- *Type:* str

---

##### `gcs_notebook_source_input`<sup>Optional</sup> <a name="gcs_notebook_source_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```python
gcs_notebook_source_input: ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `gcs_output_uri_input`<sup>Optional</sup> <a name="gcs_output_uri_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput"></a>

```python
gcs_output_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `notebook_execution_job_id_input`<sup>Optional</sup> <a name="notebook_execution_job_id_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```python
notebook_execution_job_id_input: str
```

- *Type:* str

---

##### `notebook_runtime_template_resource_name_input`<sup>Optional</sup> <a name="notebook_runtime_template_resource_name_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```python
notebook_runtime_template_resource_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ColabNotebookExecutionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `workbench_runtime_input`<sup>Optional</sup> <a name="workbench_runtime_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntimeInput"></a>

```python
workbench_runtime_input: ColabNotebookExecutionWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_timeout`<sup>Required</sup> <a name="execution_timeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

---

##### `execution_user`<sup>Required</sup> <a name="execution_user" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser"></a>

```python
execution_user: str
```

- *Type:* str

---

##### `gcs_output_uri`<sup>Required</sup> <a name="gcs_output_uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri"></a>

```python
gcs_output_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `notebook_execution_job_id`<sup>Required</sup> <a name="notebook_execution_job_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId"></a>

```python
notebook_execution_job_id: str
```

- *Type:* str

---

##### `notebook_runtime_template_resource_name`<sup>Required</sup> <a name="notebook_runtime_template_resource_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```python
notebook_runtime_template_resource_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ColabNotebookExecutionConfig <a name="ColabNotebookExecutionConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  gcs_output_uri: str,
  location: str,
  custom_environment_spec: ColabNotebookExecutionCustomEnvironmentSpec = None,
  dataform_repository_source: ColabNotebookExecutionDataformRepositorySource = None,
  deletion_policy: str = None,
  direct_notebook_source: ColabNotebookExecutionDirectNotebookSource = None,
  execution_timeout: str = None,
  execution_user: str = None,
  gcs_notebook_source: ColabNotebookExecutionGcsNotebookSource = None,
  id: str = None,
  notebook_execution_job_id: str = None,
  notebook_runtime_template_resource_name: str = None,
  project: str = None,
  service_account: str = None,
  timeouts: ColabNotebookExecutionTimeouts = None,
  workbench_runtime: ColabNotebookExecutionWorkbenchRuntime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri">gcs_output_uri</a></code> | <code>str</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.customEnvironmentSpec">custom_environment_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource">dataform_repository_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource">direct_notebook_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser">execution_user</a></code> | <code>str</code> | The user email to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource">gcs_notebook_source</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId">notebook_execution_job_id</a></code> | <code>str</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">notebook_runtime_template_resource_name</a></code> | <code>str</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.workbenchRuntime">workbench_runtime</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | workbench_runtime block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `gcs_output_uri`<sup>Required</sup> <a name="gcs_output_uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```python
gcs_output_uri: str
```

- *Type:* str

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `custom_environment_spec`<sup>Optional</sup> <a name="custom_environment_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.customEnvironmentSpec"></a>

```python
custom_environment_spec: ColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#custom_environment_spec ColabNotebookExecution#custom_environment_spec}

---

##### `dataform_repository_source`<sup>Optional</sup> <a name="dataform_repository_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```python
dataform_repository_source: ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#deletion_policy ColabNotebookExecution#deletion_policy}

---

##### `direct_notebook_source`<sup>Optional</sup> <a name="direct_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource"></a>

```python
direct_notebook_source: ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `execution_user`<sup>Optional</sup> <a name="execution_user" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser"></a>

```python
execution_user: str
```

- *Type:* str

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `gcs_notebook_source`<sup>Optional</sup> <a name="gcs_notebook_source" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```python
gcs_notebook_source: ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebook_execution_job_id`<sup>Optional</sup> <a name="notebook_execution_job_id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```python
notebook_execution_job_id: str
```

- *Type:* str

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `notebook_runtime_template_resource_name`<sup>Optional</sup> <a name="notebook_runtime_template_resource_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```python
notebook_runtime_template_resource_name: str
```

- *Type:* str

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts"></a>

```python
timeouts: ColabNotebookExecutionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

##### `workbench_runtime`<sup>Optional</sup> <a name="workbench_runtime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.workbenchRuntime"></a>

```python
workbench_runtime: ColabNotebookExecutionWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

workbench_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#workbench_runtime ColabNotebookExecution#workbench_runtime}

---

### ColabNotebookExecutionCustomEnvironmentSpec <a name="ColabNotebookExecutionCustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec(
  machine_spec: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec = None,
  network_spec: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec = None,
  persistent_disk_spec: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec = None,
  shielded_instance_config: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec">network_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec">persistent_disk_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | persistent_disk_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a></code> | shielded_instance_config block. |

---

##### `machine_spec`<sup>Optional</sup> <a name="machine_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec"></a>

```python
machine_spec: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#machine_spec ColabNotebookExecution#machine_spec}

---

##### `network_spec`<sup>Optional</sup> <a name="network_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec"></a>

```python
network_spec: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#network_spec ColabNotebookExecution#network_spec}

---

##### `persistent_disk_spec`<sup>Optional</sup> <a name="persistent_disk_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec"></a>

```python
persistent_disk_spec: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#persistent_disk_spec ColabNotebookExecution#persistent_disk_spec}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#shielded_instance_config ColabNotebookExecution#shielded_instance_config}

---

### ColabNotebookExecutionCustomEnvironmentSpecMachineSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecMachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The Compute Engine machine type selected for the runtime. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#accelerator_count ColabNotebookExecution#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#accelerator_type ColabNotebookExecution#accelerator_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#machine_type ColabNotebookExecution#machine_type}

---

### ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec(
  enable_internet_access: bool | IResolvable = None,
  network: str = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess">enable_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network">network</a></code> | <code>str</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork that this runtime is in. |

---

##### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess"></a>

```python
enable_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_internet_access ColabNotebookExecution#enable_internet_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#network ColabNotebookExecution#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#subnetwork ColabNotebookExecution#subnetwork}

---

### ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec(
  disk_size_gb: str = None,
  disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType">disk_type</a></code> | <code>str</code> | The type of the persistent disk. |

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#disk_size_gb ColabNotebookExecution#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#disk_type ColabNotebookExecution#disk_type}

---

### ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig <a name="ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig(
  enable_integrity_monitoring: bool | IResolvable = None,
  enable_secure_boot: bool | IResolvable = None,
  enable_vtpm: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>bool \| cdktn.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>bool \| cdktn.IResolvable</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_integrity_monitoring ColabNotebookExecution#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_secure_boot ColabNotebookExecution#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_vtpm ColabNotebookExecution#enable_vtpm}

---

### ColabNotebookExecutionDataformRepositorySource <a name="ColabNotebookExecutionDataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource(
  dataform_repository_resource_name: str,
  commit_sha: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">dataform_repository_resource_name</a></code> | <code>str</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha">commit_sha</a></code> | <code>str</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataform_repository_resource_name`<sup>Required</sup> <a name="dataform_repository_resource_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```python
dataform_repository_resource_name: str
```

- *Type:* str

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}

---

##### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}

---

### ColabNotebookExecutionDirectNotebookSource <a name="ColabNotebookExecutionDirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource(
  content: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content">content</a></code> | <code>str</code> | The base64-encoded contents of the input notebook file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content"></a>

```python
content: str
```

- *Type:* str

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}

---

### ColabNotebookExecutionGcsNotebookSource <a name="ColabNotebookExecutionGcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource(
  uri: str,
  generation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri">uri</a></code> | <code>str</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation">generation</a></code> | <code>str</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```python
uri: str
```

- *Type:* str

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```python
generation: str
```

- *Type:* str

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}

---

### ColabNotebookExecutionTimeouts <a name="ColabNotebookExecutionTimeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}.

---

### ColabNotebookExecutionWorkbenchRuntime <a name="ColabNotebookExecutionWorkbenchRuntime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime(
  vm_image: ColabNotebookExecutionWorkbenchRuntimeVmImage
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime.property.vmImage">vm_image</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a></code> | vm_image block. |

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime.property.vmImage"></a>

```python
vm_image: ColabNotebookExecutionWorkbenchRuntimeVmImage
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#vm_image ColabNotebookExecution#vm_image}

---

### ColabNotebookExecutionWorkbenchRuntimeVmImage <a name="ColabNotebookExecutionWorkbenchRuntimeVmImage" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage(
  family: str = None,
  name: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.family">family</a></code> | <code>str</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.name">name</a></code> | <code>str</code> | Use VM image name to find the image. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.project">project</a></code> | <code>str</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.family"></a>

```python
family: str
```

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#family ColabNotebookExecution#family}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.name"></a>

```python
name: str
```

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#name ColabNotebookExecution#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.project"></a>

```python
project: str
```

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}

---

## Classes <a name="Classes" id="Classes"></a>

### ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess">reset_enable_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_internet_access` <a name="reset_enable_internet_access" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```python
def reset_enable_internet_access() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput">enable_internet_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess">enable_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_internet_access_input`<sup>Optional</sup> <a name="enable_internet_access_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```python
enable_internet_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `enable_internet_access`<sup>Required</sup> <a name="enable_internet_access" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess"></a>

```python
enable_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec">put_network_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec">put_persistent_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec">reset_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec">reset_network_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec">reset_persistent_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec"></a>

```python
def put_machine_spec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.acceleratorCount"></a>

- *Type:* typing.Union[int, float]

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#accelerator_count ColabNotebookExecution#accelerator_count}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.acceleratorType"></a>

- *Type:* str

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#accelerator_type ColabNotebookExecution#accelerator_type}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#machine_type ColabNotebookExecution#machine_type}

---

##### `put_network_spec` <a name="put_network_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec"></a>

```python
def put_network_spec(
  enable_internet_access: bool | IResolvable = None,
  network: str = None,
  subnetwork: str = None
) -> None
```

###### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.enableInternetAccess"></a>

- *Type:* bool | cdktn.IResolvable

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_internet_access ColabNotebookExecution#enable_internet_access}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.network"></a>

- *Type:* str

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#network ColabNotebookExecution#network}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#subnetwork ColabNotebookExecution#subnetwork}

---

##### `put_persistent_disk_spec` <a name="put_persistent_disk_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec"></a>

```python
def put_persistent_disk_spec(
  disk_size_gb: str = None,
  disk_type: str = None
) -> None
```

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec.parameter.diskSizeGb"></a>

- *Type:* str

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#disk_size_gb ColabNotebookExecution#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec.parameter.diskType"></a>

- *Type:* str

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#disk_type ColabNotebookExecution#disk_type}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: bool | IResolvable = None,
  enable_secure_boot: bool | IResolvable = None,
  enable_vtpm: bool | IResolvable = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* bool | cdktn.IResolvable

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_integrity_monitoring ColabNotebookExecution#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* bool | cdktn.IResolvable

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_secure_boot ColabNotebookExecution#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* bool | cdktn.IResolvable

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_vtpm ColabNotebookExecution#enable_vtpm}

---

##### `reset_machine_spec` <a name="reset_machine_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec"></a>

```python
def reset_machine_spec() -> None
```

##### `reset_network_spec` <a name="reset_network_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec"></a>

```python
def reset_network_spec() -> None
```

##### `reset_persistent_disk_spec` <a name="reset_persistent_disk_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec"></a>

```python
def reset_persistent_disk_spec() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec">network_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec">persistent_disk_spec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput">network_spec_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput">persistent_disk_spec_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec"></a>

```python
machine_spec: ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a>

---

##### `network_spec`<sup>Required</sup> <a name="network_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec"></a>

```python
network_spec: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a>

---

##### `persistent_disk_spec`<sup>Required</sup> <a name="persistent_disk_spec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec"></a>

```python
persistent_disk_spec: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference</a>

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput"></a>

```python
machine_spec_input: ColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---

##### `network_spec_input`<sup>Optional</sup> <a name="network_spec_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput"></a>

```python
network_spec_input: ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---

##### `persistent_disk_spec_input`<sup>Optional</sup> <a name="persistent_disk_spec_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput"></a>

```python
persistent_disk_spec_input: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

---


### ColabNotebookExecutionDataformRepositorySourceOutputReference <a name="ColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">reset_commit_sha</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_commit_sha` <a name="reset_commit_sha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```python
def reset_commit_sha() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">commit_sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataform_repository_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">commit_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataform_repository_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_sha_input`<sup>Optional</sup> <a name="commit_sha_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```python
commit_sha_input: str
```

- *Type:* str

---

##### `dataform_repository_resource_name_input`<sup>Optional</sup> <a name="dataform_repository_resource_name_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```python
dataform_repository_resource_name_input: str
```

- *Type:* str

---

##### `commit_sha`<sup>Required</sup> <a name="commit_sha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

---

##### `dataform_repository_resource_name`<sup>Required</sup> <a name="dataform_repository_resource_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```python
dataform_repository_resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---


### ColabNotebookExecutionDirectNotebookSourceOutputReference <a name="ColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---


### ColabNotebookExecutionGcsNotebookSourceOutputReference <a name="ColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">reset_generation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_generation` <a name="reset_generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```python
def reset_generation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```python
generation_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---


### ColabNotebookExecutionTimeoutsOutputReference <a name="ColabNotebookExecutionTimeoutsOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ColabNotebookExecutionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---


### ColabNotebookExecutionWorkbenchRuntimeOutputReference <a name="ColabNotebookExecutionWorkbenchRuntimeOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage">put_vm_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vm_image` <a name="put_vm_image" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage"></a>

```python
def put_vm_image(
  family: str = None,
  name: str = None,
  project: str = None
) -> None
```

###### `family`<sup>Optional</sup> <a name="family" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage.parameter.family"></a>

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#family ColabNotebookExecution#family}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage.parameter.name"></a>

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#name ColabNotebookExecution#name}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage.parameter.project"></a>

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImage">vm_image</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference">ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImageInput">vm_image_input</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImage"></a>

```python
vm_image: ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference">ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference</a>

---

##### `vm_image_input`<sup>Optional</sup> <a name="vm_image_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImageInput"></a>

```python
vm_image_input: ColabNotebookExecutionWorkbenchRuntimeVmImage
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

---


### ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference <a name="ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer"></a>

```python
from cdktn_provider_google import colab_notebook_execution

colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetFamily">reset_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_family` <a name="reset_family" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetFamily"></a>

```python
def reset_family() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.internalValue"></a>

```python
internal_value: ColabNotebookExecutionWorkbenchRuntimeVmImage
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

---



