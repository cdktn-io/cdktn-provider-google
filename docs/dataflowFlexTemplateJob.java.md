# `dataflowFlexTemplateJob` Submodule <a name="`dataflowFlexTemplateJob` Submodule" id="@cdktn/provider-google.dataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowFlexTemplateJob <a name="DataflowFlexTemplateJob" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_flex_template_job.DataflowFlexTemplateJob;

DataflowFlexTemplateJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerSpecGcsPath(java.lang.String)
    .name(java.lang.String)
//  .additionalExperiments(java.util.List<java.lang.String>)
//  .additionalPipelineOptions(java.util.List<java.lang.String>)
//  .autoscalingAlgorithm(java.lang.String)
//  .createIgnoreAlreadyExists(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .enableStreamingEngine(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ipConfiguration(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launcherMachineType(java.lang.String)
//  .machineType(java.lang.String)
//  .maxWorkers(java.lang.Number)
//  .network(java.lang.String)
//  .numWorkers(java.lang.Number)
//  .onDelete(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .sdkContainerImage(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .skipWaitOnJobTermination(java.lang.Boolean|IResolvable)
//  .stagingLocation(java.lang.String)
//  .subnetwork(java.lang.String)
//  .tempLocation(java.lang.String)
//  .transformNameMapping(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalPipelineOptions">additionalPipelineOptions</a></code> | <code>java.util.List<java.lang.String></code> | List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>java.lang.String</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.launcherMachineType">launcherMachineType</a></code> | <code>java.lang.String</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.onDelete">onDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.sdkContainerImage">sdkContainerImage</a></code> | <code>java.lang.String</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.stagingLocation">stagingLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.tempLocation">tempLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only applicable when updating a pipeline. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.containerSpecGcsPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}.

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalExperiments"></a>

- *Type:* java.util.List<java.lang.String>

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_experiments DataflowFlexTemplateJob#additional_experiments}

---

##### `additionalPipelineOptions`<sup>Optional</sup> <a name="additionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.additionalPipelineOptions"></a>

- *Type:* java.util.List<java.lang.String>

List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_pipeline_options DataflowFlexTemplateJob#additional_pipeline_options}

---

##### `autoscalingAlgorithm`<sup>Optional</sup> <a name="autoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.autoscalingAlgorithm"></a>

- *Type:* java.lang.String

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#autoscaling_algorithm DataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `createIgnoreAlreadyExists`<sup>Optional</sup> <a name="createIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.createIgnoreAlreadyExists"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#create_ignore_already_exists DataflowFlexTemplateJob#create_ignore_already_exists}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#deletion_policy DataflowFlexTemplateJob#deletion_policy}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.enableStreamingEngine"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#enable_streaming_engine DataflowFlexTemplateJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.ipConfiguration"></a>

- *Type:* java.lang.String

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#ip_configuration DataflowFlexTemplateJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#kms_key_name DataflowFlexTemplateJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#labels DataflowFlexTemplateJob#labels}

---

##### `launcherMachineType`<sup>Optional</sup> <a name="launcherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.launcherMachineType"></a>

- *Type:* java.lang.String

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#launcher_machine_type DataflowFlexTemplateJob#launcher_machine_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#machine_type DataflowFlexTemplateJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.maxWorkers"></a>

- *Type:* java.lang.Number

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#max_workers DataflowFlexTemplateJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#network DataflowFlexTemplateJob#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.numWorkers"></a>

- *Type:* java.lang.Number

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#num_workers DataflowFlexTemplateJob#num_workers}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.onDelete"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#region DataflowFlexTemplateJob#region}

---

##### `sdkContainerImage`<sup>Optional</sup> <a name="sdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.sdkContainerImage"></a>

- *Type:* java.lang.String

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#sdk_container_image DataflowFlexTemplateJob#sdk_container_image}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* java.lang.String

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#service_account_email DataflowFlexTemplateJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.skipWaitOnJobTermination"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#skip_wait_on_job_termination DataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `stagingLocation`<sup>Optional</sup> <a name="stagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.stagingLocation"></a>

- *Type:* java.lang.String

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#staging_location DataflowFlexTemplateJob#staging_location}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#subnetwork DataflowFlexTemplateJob#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.tempLocation"></a>

- *Type:* java.lang.String

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#temp_location DataflowFlexTemplateJob#temp_location}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.transformNameMapping"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#transform_name_mapping DataflowFlexTemplateJob#transform_name_mapping}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions">resetAdditionalPipelineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm">resetAutoscalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists">resetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType">resetLauncherMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage">resetSdkContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination">resetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation">resetStagingLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation">resetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping">resetTransformNameMapping</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments"></a>

```java
public void resetAdditionalExperiments()
```

##### `resetAdditionalPipelineOptions` <a name="resetAdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions"></a>

```java
public void resetAdditionalPipelineOptions()
```

##### `resetAutoscalingAlgorithm` <a name="resetAutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm"></a>

```java
public void resetAutoscalingAlgorithm()
```

##### `resetCreateIgnoreAlreadyExists` <a name="resetCreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists"></a>

```java
public void resetCreateIgnoreAlreadyExists()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine"></a>

```java
public void resetEnableStreamingEngine()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId"></a>

```java
public void resetId()
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration"></a>

```java
public void resetIpConfiguration()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLauncherMachineType` <a name="resetLauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType"></a>

```java
public void resetLauncherMachineType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers"></a>

```java
public void resetMaxWorkers()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers"></a>

```java
public void resetNumWorkers()
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete"></a>

```java
public void resetOnDelete()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSdkContainerImage` <a name="resetSdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage"></a>

```java
public void resetSdkContainerImage()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetSkipWaitOnJobTermination` <a name="resetSkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```java
public void resetSkipWaitOnJobTermination()
```

##### `resetStagingLocation` <a name="resetStagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation"></a>

```java
public void resetStagingLocation()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTempLocation` <a name="resetTempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation"></a>

```java
public void resetTempLocation()
```

##### `resetTransformNameMapping` <a name="resetTransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping"></a>

```java
public void resetTransformNameMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct"></a>

```java
import io.cdktn.providers.google.dataflow_flex_template_job.DataflowFlexTemplateJob;

DataflowFlexTemplateJob.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataflow_flex_template_job.DataflowFlexTemplateJob;

DataflowFlexTemplateJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataflow_flex_template_job.DataflowFlexTemplateJob;

DataflowFlexTemplateJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataflow_flex_template_job.DataflowFlexTemplateJob;

DataflowFlexTemplateJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataflowFlexTemplateJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataflowFlexTemplateJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataflowFlexTemplateJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataflowFlexTemplateJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput">additionalPipelineOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput">autoscalingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput">containerSpecGcsPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput">createIgnoreAlreadyExistsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput">launcherMachineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput">maxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput">numWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput">onDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput">sdkContainerImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">skipWaitOnJobTerminationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput">stagingLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput">tempLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput">transformNameMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions">additionalPipelineOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType">launcherMachineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage">sdkContainerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation">stagingLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation">tempLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperimentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalPipelineOptionsInput`<sup>Optional</sup> <a name="additionalPipelineOptionsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPipelineOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoscalingAlgorithmInput`<sup>Optional</sup> <a name="autoscalingAlgorithmInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput"></a>

```java
public java.lang.String getAutoscalingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `containerSpecGcsPathInput`<sup>Optional</sup> <a name="containerSpecGcsPathInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```java
public java.lang.String getContainerSpecGcsPathInput();
```

- *Type:* java.lang.String

---

##### `createIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="createIgnoreAlreadyExistsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateIgnoreAlreadyExistsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableStreamingEngineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput"></a>

```java
public java.lang.String getIpConfigurationInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launcherMachineTypeInput`<sup>Optional</sup> <a name="launcherMachineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput"></a>

```java
public java.lang.String getLauncherMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput"></a>

```java
public java.lang.Number getMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput"></a>

```java
public java.lang.Number getNumWorkersInput();
```

- *Type:* java.lang.Number

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput"></a>

```java
public java.lang.String getOnDeleteInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sdkContainerImageInput`<sup>Optional</sup> <a name="sdkContainerImageInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput"></a>

```java
public java.lang.String getSdkContainerImageInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `skipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="skipWaitOnJobTerminationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipWaitOnJobTerminationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `stagingLocationInput`<sup>Optional</sup> <a name="stagingLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput"></a>

```java
public java.lang.String getStagingLocationInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `tempLocationInput`<sup>Optional</sup> <a name="tempLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput"></a>

```java
public java.lang.String getTempLocationInput();
```

- *Type:* java.lang.String

---

##### `transformNameMappingInput`<sup>Optional</sup> <a name="transformNameMappingInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperiments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalPipelineOptions`<sup>Required</sup> <a name="additionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions"></a>

```java
public java.util.List<java.lang.String> getAdditionalPipelineOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoscalingAlgorithm`<sup>Required</sup> <a name="autoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm"></a>

```java
public java.lang.String getAutoscalingAlgorithm();
```

- *Type:* java.lang.String

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```java
public java.lang.String getContainerSpecGcsPath();
```

- *Type:* java.lang.String

---

##### `createIgnoreAlreadyExists`<sup>Required</sup> <a name="createIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists"></a>

```java
public java.lang.Boolean|IResolvable getCreateIgnoreAlreadyExists();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine"></a>

```java
public java.lang.Boolean|IResolvable getEnableStreamingEngine();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration"></a>

```java
public java.lang.String getIpConfiguration();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launcherMachineType`<sup>Required</sup> <a name="launcherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType"></a>

```java
public java.lang.String getLauncherMachineType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sdkContainerImage`<sup>Required</sup> <a name="sdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage"></a>

```java
public java.lang.String getSdkContainerImage();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `skipWaitOnJobTermination`<sup>Required</sup> <a name="skipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```java
public java.lang.Boolean|IResolvable getSkipWaitOnJobTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `stagingLocation`<sup>Required</sup> <a name="stagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation"></a>

```java
public java.lang.String getStagingLocation();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tempLocation`<sup>Required</sup> <a name="tempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation"></a>

```java
public java.lang.String getTempLocation();
```

- *Type:* java.lang.String

---

##### `transformNameMapping`<sup>Required</sup> <a name="transformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowFlexTemplateJobConfig <a name="DataflowFlexTemplateJobConfig" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataflow_flex_template_job.DataflowFlexTemplateJobConfig;

DataflowFlexTemplateJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerSpecGcsPath(java.lang.String)
    .name(java.lang.String)
//  .additionalExperiments(java.util.List<java.lang.String>)
//  .additionalPipelineOptions(java.util.List<java.lang.String>)
//  .autoscalingAlgorithm(java.lang.String)
//  .createIgnoreAlreadyExists(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .enableStreamingEngine(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ipConfiguration(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launcherMachineType(java.lang.String)
//  .machineType(java.lang.String)
//  .maxWorkers(java.lang.Number)
//  .network(java.lang.String)
//  .numWorkers(java.lang.Number)
//  .onDelete(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .sdkContainerImage(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .skipWaitOnJobTermination(java.lang.Boolean|IResolvable)
//  .stagingLocation(java.lang.String)
//  .subnetwork(java.lang.String)
//  .tempLocation(java.lang.String)
//  .transformNameMapping(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions">additionalPipelineOptions</a></code> | <code>java.util.List<java.lang.String></code> | List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>java.lang.String</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType">launcherMachineType</a></code> | <code>java.lang.String</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage">sdkContainerImage</a></code> | <code>java.lang.String</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation">stagingLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation">tempLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only applicable when updating a pipeline. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```java
public java.lang.String getContainerSpecGcsPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}.

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperiments();
```

- *Type:* java.util.List<java.lang.String>

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_experiments DataflowFlexTemplateJob#additional_experiments}

---

##### `additionalPipelineOptions`<sup>Optional</sup> <a name="additionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions"></a>

```java
public java.util.List<java.lang.String> getAdditionalPipelineOptions();
```

- *Type:* java.util.List<java.lang.String>

List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_pipeline_options DataflowFlexTemplateJob#additional_pipeline_options}

---

##### `autoscalingAlgorithm`<sup>Optional</sup> <a name="autoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm"></a>

```java
public java.lang.String getAutoscalingAlgorithm();
```

- *Type:* java.lang.String

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#autoscaling_algorithm DataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `createIgnoreAlreadyExists`<sup>Optional</sup> <a name="createIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists"></a>

```java
public java.lang.Boolean|IResolvable getCreateIgnoreAlreadyExists();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#create_ignore_already_exists DataflowFlexTemplateJob#create_ignore_already_exists}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#deletion_policy DataflowFlexTemplateJob#deletion_policy}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine"></a>

```java
public java.lang.Boolean|IResolvable getEnableStreamingEngine();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#enable_streaming_engine DataflowFlexTemplateJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration"></a>

```java
public java.lang.String getIpConfiguration();
```

- *Type:* java.lang.String

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#ip_configuration DataflowFlexTemplateJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#kms_key_name DataflowFlexTemplateJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#labels DataflowFlexTemplateJob#labels}

---

##### `launcherMachineType`<sup>Optional</sup> <a name="launcherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType"></a>

```java
public java.lang.String getLauncherMachineType();
```

- *Type:* java.lang.String

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#launcher_machine_type DataflowFlexTemplateJob#launcher_machine_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#machine_type DataflowFlexTemplateJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#max_workers DataflowFlexTemplateJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#network DataflowFlexTemplateJob#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#num_workers DataflowFlexTemplateJob#num_workers}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#region DataflowFlexTemplateJob#region}

---

##### `sdkContainerImage`<sup>Optional</sup> <a name="sdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage"></a>

```java
public java.lang.String getSdkContainerImage();
```

- *Type:* java.lang.String

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#sdk_container_image DataflowFlexTemplateJob#sdk_container_image}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#service_account_email DataflowFlexTemplateJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```java
public java.lang.Boolean|IResolvable getSkipWaitOnJobTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#skip_wait_on_job_termination DataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `stagingLocation`<sup>Optional</sup> <a name="stagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation"></a>

```java
public java.lang.String getStagingLocation();
```

- *Type:* java.lang.String

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#staging_location DataflowFlexTemplateJob#staging_location}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#subnetwork DataflowFlexTemplateJob#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation"></a>

```java
public java.lang.String getTempLocation();
```

- *Type:* java.lang.String

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#temp_location DataflowFlexTemplateJob#temp_location}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#transform_name_mapping DataflowFlexTemplateJob#transform_name_mapping}

---



