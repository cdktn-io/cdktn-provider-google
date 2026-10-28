# `dataflowFlexTemplateJob` Submodule <a name="`dataflowFlexTemplateJob` Submodule" id="@cdktn/provider-google.dataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowFlexTemplateJob <a name="DataflowFlexTemplateJob" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer"></a>

```python
from cdktn_provider_google import dataflow_flex_template_job

dataflowFlexTemplateJob.DataflowFlexTemplateJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_spec_gcs_path: str,
  name: str,
  additional_experiments: typing.List[str] = None,
  additional_pipeline_options: typing.List[str] = None,
  autoscaling_algorithm: str = None,
  create_ignore_already_exists: bool | IResolvable = None,
  deletion_policy: str = None,
  enable_streaming_engine: bool | IResolvable = None,
  id: str = None,
  ip_configuration: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  launcher_machine_type: str = None,
  machine_type: str = None,
  max_workers: typing.Union[int, float] = None,
  network: str = None,
  num_workers: typing.Union[int, float] = None,
  on_delete: str = None,
  parameters: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  sdk_container_image: str = None,
  service_account_email: str = None,
  skip_wait_on_job_termination: bool | IResolvable = None,
  staging_location: str = None,
  subnetwork: str = None,
  temp_location: str = None,
  transform_name_mapping: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.containerSpecGcsPath">container_spec_gcs_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalExperiments">additional_experiments</a></code> | <code>typing.List[str]</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalPipelineOptions">additional_pipeline_options</a></code> | <code>typing.List[str]</code> | List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.autoscalingAlgorithm">autoscaling_algorithm</a></code> | <code>str</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.createIgnoreAlreadyExists">create_ignore_already_exists</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.enableStreamingEngine">enable_streaming_engine</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.ipConfiguration">ip_configuration</a></code> | <code>str</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.launcherMachineType">launcher_machine_type</a></code> | <code>str</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.network">network</a></code> | <code>str</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.onDelete">on_delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.region">region</a></code> | <code>str</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.sdkContainerImage">sdk_container_image</a></code> | <code>str</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.skipWaitOnJobTermination">skip_wait_on_job_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.stagingLocation">staging_location</a></code> | <code>str</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.tempLocation">temp_location</a></code> | <code>str</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.transformNameMapping">transform_name_mapping</a></code> | <code>typing.Mapping[str]</code> | Only applicable when updating a pipeline. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_spec_gcs_path`<sup>Required</sup> <a name="container_spec_gcs_path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.containerSpecGcsPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}.

---

##### `additional_experiments`<sup>Optional</sup> <a name="additional_experiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalExperiments"></a>

- *Type:* typing.List[str]

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_experiments DataflowFlexTemplateJob#additional_experiments}

---

##### `additional_pipeline_options`<sup>Optional</sup> <a name="additional_pipeline_options" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalPipelineOptions"></a>

- *Type:* typing.List[str]

List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_pipeline_options DataflowFlexTemplateJob#additional_pipeline_options}

---

##### `autoscaling_algorithm`<sup>Optional</sup> <a name="autoscaling_algorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.autoscalingAlgorithm"></a>

- *Type:* str

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#autoscaling_algorithm DataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `create_ignore_already_exists`<sup>Optional</sup> <a name="create_ignore_already_exists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.createIgnoreAlreadyExists"></a>

- *Type:* bool | cdktn.IResolvable

If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#create_ignore_already_exists DataflowFlexTemplateJob#create_ignore_already_exists}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#deletion_policy DataflowFlexTemplateJob#deletion_policy}

---

##### `enable_streaming_engine`<sup>Optional</sup> <a name="enable_streaming_engine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.enableStreamingEngine"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#enable_streaming_engine DataflowFlexTemplateJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_configuration`<sup>Optional</sup> <a name="ip_configuration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.ipConfiguration"></a>

- *Type:* str

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#ip_configuration DataflowFlexTemplateJob#ip_configuration}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#kms_key_name DataflowFlexTemplateJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#labels DataflowFlexTemplateJob#labels}

---

##### `launcher_machine_type`<sup>Optional</sup> <a name="launcher_machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.launcherMachineType"></a>

- *Type:* str

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#launcher_machine_type DataflowFlexTemplateJob#launcher_machine_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.machineType"></a>

- *Type:* str

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#machine_type DataflowFlexTemplateJob#machine_type}

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.maxWorkers"></a>

- *Type:* typing.Union[int, float]

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#max_workers DataflowFlexTemplateJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.network"></a>

- *Type:* str

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#network DataflowFlexTemplateJob#network}

---

##### `num_workers`<sup>Optional</sup> <a name="num_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.numWorkers"></a>

- *Type:* typing.Union[int, float]

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#num_workers DataflowFlexTemplateJob#num_workers}

---

##### `on_delete`<sup>Optional</sup> <a name="on_delete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.onDelete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.region"></a>

- *Type:* str

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#region DataflowFlexTemplateJob#region}

---

##### `sdk_container_image`<sup>Optional</sup> <a name="sdk_container_image" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.sdkContainerImage"></a>

- *Type:* str

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#sdk_container_image DataflowFlexTemplateJob#sdk_container_image}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* str

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#service_account_email DataflowFlexTemplateJob#service_account_email}

---

##### `skip_wait_on_job_termination`<sup>Optional</sup> <a name="skip_wait_on_job_termination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.skipWaitOnJobTermination"></a>

- *Type:* bool | cdktn.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#skip_wait_on_job_termination DataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `staging_location`<sup>Optional</sup> <a name="staging_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.stagingLocation"></a>

- *Type:* str

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#staging_location DataflowFlexTemplateJob#staging_location}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.subnetwork"></a>

- *Type:* str

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#subnetwork DataflowFlexTemplateJob#subnetwork}

---

##### `temp_location`<sup>Optional</sup> <a name="temp_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.tempLocation"></a>

- *Type:* str

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#temp_location DataflowFlexTemplateJob#temp_location}

---

##### `transform_name_mapping`<sup>Optional</sup> <a name="transform_name_mapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.transformNameMapping"></a>

- *Type:* typing.Mapping[str]

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#transform_name_mapping DataflowFlexTemplateJob#transform_name_mapping}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments">reset_additional_experiments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions">reset_additional_pipeline_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm">reset_autoscaling_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists">reset_create_ignore_already_exists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine">reset_enable_streaming_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration">reset_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType">reset_launcher_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers">reset_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers">reset_num_workers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete">reset_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage">reset_sdk_container_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination">reset_skip_wait_on_job_termination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation">reset_staging_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation">reset_temp_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping">reset_transform_name_mapping</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_additional_experiments` <a name="reset_additional_experiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments"></a>

```python
def reset_additional_experiments() -> None
```

##### `reset_additional_pipeline_options` <a name="reset_additional_pipeline_options" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions"></a>

```python
def reset_additional_pipeline_options() -> None
```

##### `reset_autoscaling_algorithm` <a name="reset_autoscaling_algorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm"></a>

```python
def reset_autoscaling_algorithm() -> None
```

##### `reset_create_ignore_already_exists` <a name="reset_create_ignore_already_exists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists"></a>

```python
def reset_create_ignore_already_exists() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_enable_streaming_engine` <a name="reset_enable_streaming_engine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine"></a>

```python
def reset_enable_streaming_engine() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_configuration` <a name="reset_ip_configuration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration"></a>

```python
def reset_ip_configuration() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_launcher_machine_type` <a name="reset_launcher_machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType"></a>

```python
def reset_launcher_machine_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_max_workers` <a name="reset_max_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers"></a>

```python
def reset_max_workers() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_num_workers` <a name="reset_num_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers"></a>

```python
def reset_num_workers() -> None
```

##### `reset_on_delete` <a name="reset_on_delete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete"></a>

```python
def reset_on_delete() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sdk_container_image` <a name="reset_sdk_container_image" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage"></a>

```python
def reset_sdk_container_image() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

##### `reset_skip_wait_on_job_termination` <a name="reset_skip_wait_on_job_termination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```python
def reset_skip_wait_on_job_termination() -> None
```

##### `reset_staging_location` <a name="reset_staging_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation"></a>

```python
def reset_staging_location() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_temp_location` <a name="reset_temp_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation"></a>

```python
def reset_temp_location() -> None
```

##### `reset_transform_name_mapping` <a name="reset_transform_name_mapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping"></a>

```python
def reset_transform_name_mapping() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct"></a>

```python
from cdktn_provider_google import dataflow_flex_template_job

dataflowFlexTemplateJob.DataflowFlexTemplateJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement"></a>

```python
from cdktn_provider_google import dataflow_flex_template_job

dataflowFlexTemplateJob.DataflowFlexTemplateJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource"></a>

```python
from cdktn_provider_google import dataflow_flex_template_job

dataflowFlexTemplateJob.DataflowFlexTemplateJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataflow_flex_template_job

dataflowFlexTemplateJob.DataflowFlexTemplateJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataflowFlexTemplateJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataflowFlexTemplateJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataflowFlexTemplateJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput">additional_experiments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput">additional_pipeline_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput">autoscaling_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput">container_spec_gcs_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput">create_ignore_already_exists_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput">enable_streaming_engine_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput">ip_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput">launcher_machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput">max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput">num_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput">on_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput">sdk_container_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">skip_wait_on_job_termination_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput">staging_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput">temp_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput">transform_name_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments">additional_experiments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions">additional_pipeline_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm">autoscaling_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath">container_spec_gcs_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists">create_ignore_already_exists</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine">enable_streaming_engine</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration">ip_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType">launcher_machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete">on_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage">sdk_container_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination">skip_wait_on_job_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation">staging_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation">temp_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping">transform_name_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `additional_experiments_input`<sup>Optional</sup> <a name="additional_experiments_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput"></a>

```python
additional_experiments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_pipeline_options_input`<sup>Optional</sup> <a name="additional_pipeline_options_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput"></a>

```python
additional_pipeline_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autoscaling_algorithm_input`<sup>Optional</sup> <a name="autoscaling_algorithm_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput"></a>

```python
autoscaling_algorithm_input: str
```

- *Type:* str

---

##### `container_spec_gcs_path_input`<sup>Optional</sup> <a name="container_spec_gcs_path_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```python
container_spec_gcs_path_input: str
```

- *Type:* str

---

##### `create_ignore_already_exists_input`<sup>Optional</sup> <a name="create_ignore_already_exists_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput"></a>

```python
create_ignore_already_exists_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `enable_streaming_engine_input`<sup>Optional</sup> <a name="enable_streaming_engine_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput"></a>

```python
enable_streaming_engine_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput"></a>

```python
ip_configuration_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launcher_machine_type_input`<sup>Optional</sup> <a name="launcher_machine_type_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput"></a>

```python
launcher_machine_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `max_workers_input`<sup>Optional</sup> <a name="max_workers_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput"></a>

```python
max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `num_workers_input`<sup>Optional</sup> <a name="num_workers_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput"></a>

```python
num_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_delete_input`<sup>Optional</sup> <a name="on_delete_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput"></a>

```python
on_delete_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sdk_container_image_input`<sup>Optional</sup> <a name="sdk_container_image_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput"></a>

```python
sdk_container_image_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `skip_wait_on_job_termination_input`<sup>Optional</sup> <a name="skip_wait_on_job_termination_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```python
skip_wait_on_job_termination_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `staging_location_input`<sup>Optional</sup> <a name="staging_location_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput"></a>

```python
staging_location_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `temp_location_input`<sup>Optional</sup> <a name="temp_location_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput"></a>

```python
temp_location_input: str
```

- *Type:* str

---

##### `transform_name_mapping_input`<sup>Optional</sup> <a name="transform_name_mapping_input" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput"></a>

```python
transform_name_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `additional_experiments`<sup>Required</sup> <a name="additional_experiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments"></a>

```python
additional_experiments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_pipeline_options`<sup>Required</sup> <a name="additional_pipeline_options" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions"></a>

```python
additional_pipeline_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autoscaling_algorithm`<sup>Required</sup> <a name="autoscaling_algorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm"></a>

```python
autoscaling_algorithm: str
```

- *Type:* str

---

##### `container_spec_gcs_path`<sup>Required</sup> <a name="container_spec_gcs_path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```python
container_spec_gcs_path: str
```

- *Type:* str

---

##### `create_ignore_already_exists`<sup>Required</sup> <a name="create_ignore_already_exists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists"></a>

```python
create_ignore_already_exists: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `enable_streaming_engine`<sup>Required</sup> <a name="enable_streaming_engine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine"></a>

```python
enable_streaming_engine: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration"></a>

```python
ip_configuration: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launcher_machine_type`<sup>Required</sup> <a name="launcher_machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType"></a>

```python
launcher_machine_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `max_workers`<sup>Required</sup> <a name="max_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `num_workers`<sup>Required</sup> <a name="num_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_delete`<sup>Required</sup> <a name="on_delete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete"></a>

```python
on_delete: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sdk_container_image`<sup>Required</sup> <a name="sdk_container_image" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage"></a>

```python
sdk_container_image: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `skip_wait_on_job_termination`<sup>Required</sup> <a name="skip_wait_on_job_termination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```python
skip_wait_on_job_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `staging_location`<sup>Required</sup> <a name="staging_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation"></a>

```python
staging_location: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `temp_location`<sup>Required</sup> <a name="temp_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation"></a>

```python
temp_location: str
```

- *Type:* str

---

##### `transform_name_mapping`<sup>Required</sup> <a name="transform_name_mapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping"></a>

```python
transform_name_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowFlexTemplateJobConfig <a name="DataflowFlexTemplateJobConfig" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.Initializer"></a>

```python
from cdktn_provider_google import dataflow_flex_template_job

dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_spec_gcs_path: str,
  name: str,
  additional_experiments: typing.List[str] = None,
  additional_pipeline_options: typing.List[str] = None,
  autoscaling_algorithm: str = None,
  create_ignore_already_exists: bool | IResolvable = None,
  deletion_policy: str = None,
  enable_streaming_engine: bool | IResolvable = None,
  id: str = None,
  ip_configuration: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  launcher_machine_type: str = None,
  machine_type: str = None,
  max_workers: typing.Union[int, float] = None,
  network: str = None,
  num_workers: typing.Union[int, float] = None,
  on_delete: str = None,
  parameters: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  sdk_container_image: str = None,
  service_account_email: str = None,
  skip_wait_on_job_termination: bool | IResolvable = None,
  staging_location: str = None,
  subnetwork: str = None,
  temp_location: str = None,
  transform_name_mapping: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath">container_spec_gcs_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments">additional_experiments</a></code> | <code>typing.List[str]</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions">additional_pipeline_options</a></code> | <code>typing.List[str]</code> | List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm">autoscaling_algorithm</a></code> | <code>str</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists">create_ignore_already_exists</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine">enable_streaming_engine</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration">ip_configuration</a></code> | <code>str</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType">launcher_machine_type</a></code> | <code>str</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType">machine_type</a></code> | <code>str</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network">network</a></code> | <code>str</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete">on_delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region">region</a></code> | <code>str</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage">sdk_container_image</a></code> | <code>str</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">skip_wait_on_job_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation">staging_location</a></code> | <code>str</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation">temp_location</a></code> | <code>str</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping">transform_name_mapping</a></code> | <code>typing.Mapping[str]</code> | Only applicable when updating a pipeline. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_spec_gcs_path`<sup>Required</sup> <a name="container_spec_gcs_path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```python
container_spec_gcs_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}.

---

##### `additional_experiments`<sup>Optional</sup> <a name="additional_experiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments"></a>

```python
additional_experiments: typing.List[str]
```

- *Type:* typing.List[str]

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_experiments DataflowFlexTemplateJob#additional_experiments}

---

##### `additional_pipeline_options`<sup>Optional</sup> <a name="additional_pipeline_options" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions"></a>

```python
additional_pipeline_options: typing.List[str]
```

- *Type:* typing.List[str]

List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_pipeline_options DataflowFlexTemplateJob#additional_pipeline_options}

---

##### `autoscaling_algorithm`<sup>Optional</sup> <a name="autoscaling_algorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm"></a>

```python
autoscaling_algorithm: str
```

- *Type:* str

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#autoscaling_algorithm DataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `create_ignore_already_exists`<sup>Optional</sup> <a name="create_ignore_already_exists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists"></a>

```python
create_ignore_already_exists: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#create_ignore_already_exists DataflowFlexTemplateJob#create_ignore_already_exists}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#deletion_policy DataflowFlexTemplateJob#deletion_policy}

---

##### `enable_streaming_engine`<sup>Optional</sup> <a name="enable_streaming_engine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine"></a>

```python
enable_streaming_engine: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#enable_streaming_engine DataflowFlexTemplateJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_configuration`<sup>Optional</sup> <a name="ip_configuration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration"></a>

```python
ip_configuration: str
```

- *Type:* str

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#ip_configuration DataflowFlexTemplateJob#ip_configuration}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#kms_key_name DataflowFlexTemplateJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#labels DataflowFlexTemplateJob#labels}

---

##### `launcher_machine_type`<sup>Optional</sup> <a name="launcher_machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType"></a>

```python
launcher_machine_type: str
```

- *Type:* str

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#launcher_machine_type DataflowFlexTemplateJob#launcher_machine_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#machine_type DataflowFlexTemplateJob#machine_type}

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#max_workers DataflowFlexTemplateJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#network DataflowFlexTemplateJob#network}

---

##### `num_workers`<sup>Optional</sup> <a name="num_workers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#num_workers DataflowFlexTemplateJob#num_workers}

---

##### `on_delete`<sup>Optional</sup> <a name="on_delete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete"></a>

```python
on_delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#region DataflowFlexTemplateJob#region}

---

##### `sdk_container_image`<sup>Optional</sup> <a name="sdk_container_image" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage"></a>

```python
sdk_container_image: str
```

- *Type:* str

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#sdk_container_image DataflowFlexTemplateJob#sdk_container_image}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#service_account_email DataflowFlexTemplateJob#service_account_email}

---

##### `skip_wait_on_job_termination`<sup>Optional</sup> <a name="skip_wait_on_job_termination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```python
skip_wait_on_job_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#skip_wait_on_job_termination DataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `staging_location`<sup>Optional</sup> <a name="staging_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation"></a>

```python
staging_location: str
```

- *Type:* str

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#staging_location DataflowFlexTemplateJob#staging_location}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#subnetwork DataflowFlexTemplateJob#subnetwork}

---

##### `temp_location`<sup>Optional</sup> <a name="temp_location" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation"></a>

```python
temp_location: str
```

- *Type:* str

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#temp_location DataflowFlexTemplateJob#temp_location}

---

##### `transform_name_mapping`<sup>Optional</sup> <a name="transform_name_mapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping"></a>

```python
transform_name_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#transform_name_mapping DataflowFlexTemplateJob#transform_name_mapping}

---



