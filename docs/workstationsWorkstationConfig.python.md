# `workstationsWorkstationConfig` Submodule <a name="`workstationsWorkstationConfig` Submodule" id="@cdktn/provider-google.workstationsWorkstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationConfigA <a name="WorkstationsWorkstationConfigA" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config google_workstations_workstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  workstation_cluster_id: str,
  workstation_config_id: str,
  allowed_ports: IResolvable | typing.List[WorkstationsWorkstationConfigAllowedPorts] = None,
  annotations: typing.Mapping[str] = None,
  container: WorkstationsWorkstationConfigContainer = None,
  deletion_policy: str = None,
  disable_tcp_connections: bool | IResolvable = None,
  display_name: str = None,
  enable_audit_agent: bool | IResolvable = None,
  encryption_key: WorkstationsWorkstationConfigEncryptionKey = None,
  ephemeral_directories: IResolvable | typing.List[WorkstationsWorkstationConfigEphemeralDirectories] = None,
  host: WorkstationsWorkstationConfigHost = None,
  id: str = None,
  idle_timeout: str = None,
  labels: typing.Mapping[str] = None,
  max_usable_workstations: typing.Union[int, float] = None,
  persistent_directories: IResolvable | typing.List[WorkstationsWorkstationConfigPersistentDirectories] = None,
  project: str = None,
  readiness_checks: IResolvable | typing.List[WorkstationsWorkstationConfigReadinessChecks] = None,
  replica_zones: typing.List[str] = None,
  running_timeout: str = None,
  timeouts: WorkstationsWorkstationConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.allowedPorts">allowed_ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]</code> | allowed_ports block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.container">container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.disableTcpConnections">disable_tcp_connections</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables support for plain TCP connections in the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.enableAuditAgent">enable_audit_agent</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable Linux 'auditd' logging on the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.ephemeralDirectories">ephemeral_directories</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]</code> | ephemeral_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.host">host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.idleTimeout">idle_timeout</a></code> | <code>str</code> | How long to wait before automatically stopping an instance that hasn't recently received any user traffic. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.maxUsableWorkstations">max_usable_workstations</a></code> | <code>typing.Union[int, float]</code> | Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.persistentDirectories">persistent_directories</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]</code> | persistent_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.readinessChecks">readiness_checks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]</code> | readiness_checks block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.replicaZones">replica_zones</a></code> | <code>typing.List[str]</code> | Specifies the zones used to replicate the VM and disk resources within the region. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.runningTimeout">running_timeout</a></code> | <code>str</code> | How long to wait before automatically stopping a workstation after it was started. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.location"></a>

- *Type:* str

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#location WorkstationsWorkstationConfigA#location}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationClusterId"></a>

- *Type:* str

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#workstation_cluster_id WorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationConfigId"></a>

- *Type:* str

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#workstation_config_id WorkstationsWorkstationConfigA#workstation_config_id}

---

##### `allowed_ports`<sup>Optional</sup> <a name="allowed_ports" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.allowedPorts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#allowed_ports WorkstationsWorkstationConfigA#allowed_ports}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#annotations WorkstationsWorkstationConfigA#annotations}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.container"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#container WorkstationsWorkstationConfigA#container}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#deletion_policy WorkstationsWorkstationConfigA#deletion_policy}

---

##### `disable_tcp_connections`<sup>Optional</sup> <a name="disable_tcp_connections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.disableTcpConnections"></a>

- *Type:* bool | cdktn.IResolvable

Disables support for plain TCP connections in the workstation.

By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_tcp_connections WorkstationsWorkstationConfigA#disable_tcp_connections}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#display_name WorkstationsWorkstationConfigA#display_name}

---

##### `enable_audit_agent`<sup>Optional</sup> <a name="enable_audit_agent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.enableAuditAgent"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable Linux 'auditd' logging on the workstation.

When enabled, a service account must also be specified that has 'logging.buckets.write' permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_audit_agent WorkstationsWorkstationConfigA#enable_audit_agent}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#encryption_key WorkstationsWorkstationConfigA#encryption_key}

---

##### `ephemeral_directories`<sup>Optional</sup> <a name="ephemeral_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.ephemeralDirectories"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]

ephemeral_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#ephemeral_directories WorkstationsWorkstationConfigA#ephemeral_directories}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.host"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#host WorkstationsWorkstationConfigA#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.idleTimeout"></a>

- *Type:* str

How long to wait before automatically stopping an instance that hasn't recently received any user traffic.

A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#idle_timeout WorkstationsWorkstationConfigA#idle_timeout}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#labels WorkstationsWorkstationConfigA#labels}

---

##### `max_usable_workstations`<sup>Optional</sup> <a name="max_usable_workstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.maxUsableWorkstations"></a>

- *Type:* typing.Union[int, float]

Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#max_usable_workstations WorkstationsWorkstationConfigA#max_usable_workstations}

---

##### `persistent_directories`<sup>Optional</sup> <a name="persistent_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.persistentDirectories"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#persistent_directories WorkstationsWorkstationConfigA#persistent_directories}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}.

---

##### `readiness_checks`<sup>Optional</sup> <a name="readiness_checks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.readinessChecks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]

readiness_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#readiness_checks WorkstationsWorkstationConfigA#readiness_checks}

---

##### `replica_zones`<sup>Optional</sup> <a name="replica_zones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.replicaZones"></a>

- *Type:* typing.List[str]

Specifies the zones used to replicate the VM and disk resources within the region.

If set, exactly two zones within the workstation cluster's region must be specified—for example, '['us-central1-a', 'us-central1-f']'.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#replica_zones WorkstationsWorkstationConfigA#replica_zones}

---

##### `running_timeout`<sup>Optional</sup> <a name="running_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.runningTimeout"></a>

- *Type:* str

How long to wait before automatically stopping a workstation after it was started.

A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if 'encryption_key' is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#running_timeout WorkstationsWorkstationConfigA#running_timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#timeouts WorkstationsWorkstationConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts">put_allowed_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey">put_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories">put_ephemeral_directories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost">put_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories">put_persistent_directories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks">put_readiness_checks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts">reset_allowed_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections">reset_disable_tcp_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent">reset_enable_audit_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories">reset_ephemeral_directories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations">reset_max_usable_workstations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories">reset_persistent_directories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks">reset_readiness_checks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones">reset_replica_zones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout">reset_running_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_ports` <a name="put_allowed_ports" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts"></a>

```python
def put_allowed_ports(
  value: IResolvable | typing.List[WorkstationsWorkstationConfigAllowedPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]

---

##### `put_container` <a name="put_container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer"></a>

```python
def put_container(
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Mapping[str] = None,
  image: str = None,
  run_as_user: typing.Union[int, float] = None,
  working_dir: str = None
) -> None
```

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.args"></a>

- *Type:* typing.List[str]

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#args WorkstationsWorkstationConfigA#args}

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.command"></a>

- *Type:* typing.List[str]

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#command WorkstationsWorkstationConfigA#command}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.env"></a>

- *Type:* typing.Mapping[str]

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#env WorkstationsWorkstationConfigA#env}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.image"></a>

- *Type:* str

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#image WorkstationsWorkstationConfigA#image}

---

###### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.runAsUser"></a>

- *Type:* typing.Union[int, float]

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#run_as_user WorkstationsWorkstationConfigA#run_as_user}

---

###### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.workingDir"></a>

- *Type:* str

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#working_dir WorkstationsWorkstationConfigA#working_dir}

---

##### `put_encryption_key` <a name="put_encryption_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey"></a>

```python
def put_encryption_key(
  kms_key: str,
  kms_key_service_account: str
) -> None
```

###### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey.parameter.kmsKey"></a>

- *Type:* str

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#kms_key WorkstationsWorkstationConfigA#kms_key}

---

###### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#kms_key_service_account WorkstationsWorkstationConfigA#kms_key_service_account}

---

##### `put_ephemeral_directories` <a name="put_ephemeral_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories"></a>

```python
def put_ephemeral_directories(
  value: IResolvable | typing.List[WorkstationsWorkstationConfigEphemeralDirectories]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]

---

##### `put_host` <a name="put_host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost"></a>

```python
def put_host(
  gce_instance: WorkstationsWorkstationConfigHostGceInstance = None
) -> None
```

###### `gce_instance`<sup>Optional</sup> <a name="gce_instance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost.parameter.gceInstance"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_instance WorkstationsWorkstationConfigA#gce_instance}

---

##### `put_persistent_directories` <a name="put_persistent_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories"></a>

```python
def put_persistent_directories(
  value: IResolvable | typing.List[WorkstationsWorkstationConfigPersistentDirectories]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]

---

##### `put_readiness_checks` <a name="put_readiness_checks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks"></a>

```python
def put_readiness_checks(
  value: IResolvable | typing.List[WorkstationsWorkstationConfigReadinessChecks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}.

---

##### `reset_allowed_ports` <a name="reset_allowed_ports" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts"></a>

```python
def reset_allowed_ports() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disable_tcp_connections` <a name="reset_disable_tcp_connections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections"></a>

```python
def reset_disable_tcp_connections() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_audit_agent` <a name="reset_enable_audit_agent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent"></a>

```python
def reset_enable_audit_agent() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_ephemeral_directories` <a name="reset_ephemeral_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories"></a>

```python
def reset_ephemeral_directories() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_usable_workstations` <a name="reset_max_usable_workstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations"></a>

```python
def reset_max_usable_workstations() -> None
```

##### `reset_persistent_directories` <a name="reset_persistent_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories"></a>

```python
def reset_persistent_directories() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_readiness_checks` <a name="reset_readiness_checks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks"></a>

```python
def reset_readiness_checks() -> None
```

##### `reset_replica_zones` <a name="reset_replica_zones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones"></a>

```python
def reset_replica_zones() -> None
```

##### `reset_running_timeout` <a name="reset_running_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout"></a>

```python
def reset_running_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkstationsWorkstationConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkstationsWorkstationConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts">allowed_ports</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded">degraded</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories">ephemeral_directories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host">host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories">persistent_directories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks">readiness_checks</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput">allowed_ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput">container_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput">disable_tcp_connections_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput">enable_audit_agent_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput">encryption_key_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput">ephemeral_directories_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput">host_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput">max_usable_workstations_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput">persistent_directories_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput">readiness_checks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput">replica_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput">running_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput">workstation_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput">workstation_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections">disable_tcp_connections</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent">enable_audit_agent</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations">max_usable_workstations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones">replica_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout">running_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_ports`<sup>Required</sup> <a name="allowed_ports" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts"></a>

```python
allowed_ports: WorkstationsWorkstationConfigAllowedPortsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions"></a>

```python
conditions: WorkstationsWorkstationConfigConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container"></a>

```python
container: WorkstationsWorkstationConfigContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded"></a>

```python
degraded: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey"></a>

```python
encryption_key: WorkstationsWorkstationConfigEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a>

---

##### `ephemeral_directories`<sup>Required</sup> <a name="ephemeral_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories"></a>

```python
ephemeral_directories: WorkstationsWorkstationConfigEphemeralDirectoriesList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host"></a>

```python
host: WorkstationsWorkstationConfigHostOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `persistent_directories`<sup>Required</sup> <a name="persistent_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories"></a>

```python
persistent_directories: WorkstationsWorkstationConfigPersistentDirectoriesList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a>

---

##### `readiness_checks`<sup>Required</sup> <a name="readiness_checks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks"></a>

```python
readiness_checks: WorkstationsWorkstationConfigReadinessChecksList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts"></a>

```python
timeouts: WorkstationsWorkstationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `allowed_ports_input`<sup>Optional</sup> <a name="allowed_ports_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput"></a>

```python
allowed_ports_input: IResolvable | typing.List[WorkstationsWorkstationConfigAllowedPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput"></a>

```python
container_input: WorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disable_tcp_connections_input`<sup>Optional</sup> <a name="disable_tcp_connections_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput"></a>

```python
disable_tcp_connections_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_audit_agent_input`<sup>Optional</sup> <a name="enable_audit_agent_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput"></a>

```python
enable_audit_agent_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput"></a>

```python
encryption_key_input: WorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---

##### `ephemeral_directories_input`<sup>Optional</sup> <a name="ephemeral_directories_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput"></a>

```python
ephemeral_directories_input: IResolvable | typing.List[WorkstationsWorkstationConfigEphemeralDirectories]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput"></a>

```python
host_input: WorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_usable_workstations_input`<sup>Optional</sup> <a name="max_usable_workstations_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput"></a>

```python
max_usable_workstations_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persistent_directories_input`<sup>Optional</sup> <a name="persistent_directories_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput"></a>

```python
persistent_directories_input: IResolvable | typing.List[WorkstationsWorkstationConfigPersistentDirectories]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `readiness_checks_input`<sup>Optional</sup> <a name="readiness_checks_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput"></a>

```python
readiness_checks_input: IResolvable | typing.List[WorkstationsWorkstationConfigReadinessChecks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]

---

##### `replica_zones_input`<sup>Optional</sup> <a name="replica_zones_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput"></a>

```python
replica_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `running_timeout_input`<sup>Optional</sup> <a name="running_timeout_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput"></a>

```python
running_timeout_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WorkstationsWorkstationConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---

##### `workstation_cluster_id_input`<sup>Optional</sup> <a name="workstation_cluster_id_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput"></a>

```python
workstation_cluster_id_input: str
```

- *Type:* str

---

##### `workstation_config_id_input`<sup>Optional</sup> <a name="workstation_config_id_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput"></a>

```python
workstation_config_id_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disable_tcp_connections`<sup>Required</sup> <a name="disable_tcp_connections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections"></a>

```python
disable_tcp_connections: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_audit_agent`<sup>Required</sup> <a name="enable_audit_agent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent"></a>

```python
enable_audit_agent: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_usable_workstations`<sup>Required</sup> <a name="max_usable_workstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations"></a>

```python
max_usable_workstations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `replica_zones`<sup>Required</sup> <a name="replica_zones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones"></a>

```python
replica_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `running_timeout`<sup>Required</sup> <a name="running_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout"></a>

```python
running_timeout: str
```

- *Type:* str

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId"></a>

```python
workstation_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationConfigAConfig <a name="WorkstationsWorkstationConfigAConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  workstation_cluster_id: str,
  workstation_config_id: str,
  allowed_ports: IResolvable | typing.List[WorkstationsWorkstationConfigAllowedPorts] = None,
  annotations: typing.Mapping[str] = None,
  container: WorkstationsWorkstationConfigContainer = None,
  deletion_policy: str = None,
  disable_tcp_connections: bool | IResolvable = None,
  display_name: str = None,
  enable_audit_agent: bool | IResolvable = None,
  encryption_key: WorkstationsWorkstationConfigEncryptionKey = None,
  ephemeral_directories: IResolvable | typing.List[WorkstationsWorkstationConfigEphemeralDirectories] = None,
  host: WorkstationsWorkstationConfigHost = None,
  id: str = None,
  idle_timeout: str = None,
  labels: typing.Mapping[str] = None,
  max_usable_workstations: typing.Union[int, float] = None,
  persistent_directories: IResolvable | typing.List[WorkstationsWorkstationConfigPersistentDirectories] = None,
  project: str = None,
  readiness_checks: IResolvable | typing.List[WorkstationsWorkstationConfigReadinessChecks] = None,
  replica_zones: typing.List[str] = None,
  running_timeout: str = None,
  timeouts: WorkstationsWorkstationConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location">location</a></code> | <code>str</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts">allowed_ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]</code> | allowed_ports block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections">disable_tcp_connections</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables support for plain TCP connections in the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent">enable_audit_agent</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable Linux 'auditd' logging on the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories">ephemeral_directories</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]</code> | ephemeral_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host">host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | How long to wait before automatically stopping an instance that hasn't recently received any user traffic. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations">max_usable_workstations</a></code> | <code>typing.Union[int, float]</code> | Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories">persistent_directories</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]</code> | persistent_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks">readiness_checks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]</code> | readiness_checks block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones">replica_zones</a></code> | <code>typing.List[str]</code> | Specifies the zones used to replicate the VM and disk resources within the region. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout">running_timeout</a></code> | <code>str</code> | How long to wait before automatically stopping a workstation after it was started. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#location WorkstationsWorkstationConfigA#location}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#workstation_cluster_id WorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId"></a>

```python
workstation_config_id: str
```

- *Type:* str

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#workstation_config_id WorkstationsWorkstationConfigA#workstation_config_id}

---

##### `allowed_ports`<sup>Optional</sup> <a name="allowed_ports" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts"></a>

```python
allowed_ports: IResolvable | typing.List[WorkstationsWorkstationConfigAllowedPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#allowed_ports WorkstationsWorkstationConfigA#allowed_ports}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#annotations WorkstationsWorkstationConfigA#annotations}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container"></a>

```python
container: WorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#container WorkstationsWorkstationConfigA#container}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#deletion_policy WorkstationsWorkstationConfigA#deletion_policy}

---

##### `disable_tcp_connections`<sup>Optional</sup> <a name="disable_tcp_connections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections"></a>

```python
disable_tcp_connections: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disables support for plain TCP connections in the workstation.

By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_tcp_connections WorkstationsWorkstationConfigA#disable_tcp_connections}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#display_name WorkstationsWorkstationConfigA#display_name}

---

##### `enable_audit_agent`<sup>Optional</sup> <a name="enable_audit_agent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent"></a>

```python
enable_audit_agent: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable Linux 'auditd' logging on the workstation.

When enabled, a service account must also be specified that has 'logging.buckets.write' permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_audit_agent WorkstationsWorkstationConfigA#enable_audit_agent}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey"></a>

```python
encryption_key: WorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#encryption_key WorkstationsWorkstationConfigA#encryption_key}

---

##### `ephemeral_directories`<sup>Optional</sup> <a name="ephemeral_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories"></a>

```python
ephemeral_directories: IResolvable | typing.List[WorkstationsWorkstationConfigEphemeralDirectories]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]

ephemeral_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#ephemeral_directories WorkstationsWorkstationConfigA#ephemeral_directories}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host"></a>

```python
host: WorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#host WorkstationsWorkstationConfigA#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

How long to wait before automatically stopping an instance that hasn't recently received any user traffic.

A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#idle_timeout WorkstationsWorkstationConfigA#idle_timeout}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#labels WorkstationsWorkstationConfigA#labels}

---

##### `max_usable_workstations`<sup>Optional</sup> <a name="max_usable_workstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations"></a>

```python
max_usable_workstations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#max_usable_workstations WorkstationsWorkstationConfigA#max_usable_workstations}

---

##### `persistent_directories`<sup>Optional</sup> <a name="persistent_directories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories"></a>

```python
persistent_directories: IResolvable | typing.List[WorkstationsWorkstationConfigPersistentDirectories]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#persistent_directories WorkstationsWorkstationConfigA#persistent_directories}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}.

---

##### `readiness_checks`<sup>Optional</sup> <a name="readiness_checks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks"></a>

```python
readiness_checks: IResolvable | typing.List[WorkstationsWorkstationConfigReadinessChecks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]

readiness_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#readiness_checks WorkstationsWorkstationConfigA#readiness_checks}

---

##### `replica_zones`<sup>Optional</sup> <a name="replica_zones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones"></a>

```python
replica_zones: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the zones used to replicate the VM and disk resources within the region.

If set, exactly two zones within the workstation cluster's region must be specified—for example, '['us-central1-a', 'us-central1-f']'.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#replica_zones WorkstationsWorkstationConfigA#replica_zones}

---

##### `running_timeout`<sup>Optional</sup> <a name="running_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout"></a>

```python
running_timeout: str
```

- *Type:* str

How long to wait before automatically stopping a workstation after it was started.

A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if 'encryption_key' is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#running_timeout WorkstationsWorkstationConfigA#running_timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts"></a>

```python
timeouts: WorkstationsWorkstationConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#timeouts WorkstationsWorkstationConfigA#timeouts}

---

### WorkstationsWorkstationConfigAllowedPorts <a name="WorkstationsWorkstationConfigAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts(
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Starting port number for the current range of ports. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Ending port number for the current range of ports. |

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Starting port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#first WorkstationsWorkstationConfigA#first}

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Ending port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#last WorkstationsWorkstationConfigA#last}

---

### WorkstationsWorkstationConfigConditions <a name="WorkstationsWorkstationConfigConditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions()
```


### WorkstationsWorkstationConfigContainer <a name="WorkstationsWorkstationConfigContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer(
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Mapping[str] = None,
  image: str = None,
  run_as_user: typing.Union[int, float] = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments passed to the entrypoint. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command">command</a></code> | <code>typing.List[str]</code> | If set, overrides the default ENTRYPOINT specified by the image. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env">env</a></code> | <code>typing.Mapping[str]</code> | Environment variables passed to the container. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image">image</a></code> | <code>str</code> | Docker image defining the container. This image must be accessible by the config's service account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | If set, overrides the USER specified in the image with the given uid. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir">working_dir</a></code> | <code>str</code> | If set, overrides the default DIR specified by the image. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#args WorkstationsWorkstationConfigA#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#command WorkstationsWorkstationConfigA#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#env WorkstationsWorkstationConfigA#env}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#image WorkstationsWorkstationConfigA#image}

---

##### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#run_as_user WorkstationsWorkstationConfigA#run_as_user}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#working_dir WorkstationsWorkstationConfigA#working_dir}

---

### WorkstationsWorkstationConfigEncryptionKey <a name="WorkstationsWorkstationConfigEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey(
  kms_key: str,
  kms_key_service_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey">kms_key</a></code> | <code>str</code> | The name of the Google Cloud KMS encryption key. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account to use with the specified KMS key. |

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#kms_key WorkstationsWorkstationConfigA#kms_key}

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#kms_key_service_account WorkstationsWorkstationConfigA#kms_key_service_account}

---

### WorkstationsWorkstationConfigEphemeralDirectories <a name="WorkstationsWorkstationConfigEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories(
  gce_pd: WorkstationsWorkstationConfigEphemeralDirectoriesGcePd = None,
  mount_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd">gce_pd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath">mount_path</a></code> | <code>str</code> | Location of this directory in the running workstation. |

---

##### `gce_pd`<sup>Optional</sup> <a name="gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd"></a>

```python
gce_pd: WorkstationsWorkstationConfigEphemeralDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigEphemeralDirectoriesGcePd <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd(
  disk_type: str = None,
  read_only: bool | IResolvable = None,
  source_image: str = None,
  source_snapshot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType">disk_type</a></code> | <code>str</code> | Type of the disk to use. Defaults to '"pd-standard"'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the disk is read only. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage">source_image</a></code> | <code>str</code> | Name of the disk image to use as the source for the disk. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | Name of the snapshot to use as the source for the disk. |

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Type of the disk to use. Defaults to '"pd-standard"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the disk is read only.

If true, the disk may be shared by multiple VMs and 'sourceSnapshot' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#read_only WorkstationsWorkstationConfigA#read_only}

---

##### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

Name of the disk image to use as the source for the disk.

Must be empty 'sourceSnapshot' is set.
Updating 'sourceImage' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_image WorkstationsWorkstationConfigA#source_image}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

Name of the snapshot to use as the source for the disk.

Must be empty if 'sourceImage' is set.
Must be empty if 'read_only' is false.
Updating 'source_snapshot' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigHost <a name="WorkstationsWorkstationConfigHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHost(
  gce_instance: WorkstationsWorkstationConfigHostGceInstance = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance">gce_instance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | gce_instance block. |

---

##### `gce_instance`<sup>Optional</sup> <a name="gce_instance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance"></a>

```python
gce_instance: WorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_instance WorkstationsWorkstationConfigA#gce_instance}

---

### WorkstationsWorkstationConfigHostGceInstance <a name="WorkstationsWorkstationConfigHostGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance(
  accelerators: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceAccelerators] = None,
  boost_configs: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigs] = None,
  boot_disk_size_gb: typing.Union[int, float] = None,
  confidential_instance_config: WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig = None,
  disable_public_ip_addresses: bool | IResolvable = None,
  disable_ssh: bool | IResolvable = None,
  enable_nested_virtualization: bool | IResolvable = None,
  instance_metadata: typing.Mapping[str] = None,
  machine_type: str = None,
  pool_size: typing.Union[int, float] = None,
  service_account: str = None,
  service_account_scopes: typing.List[str] = None,
  shielded_instance_config: WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  vm_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators">accelerators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]</code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs">boost_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]</code> | boost_configs block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the boot disk in GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses">disable_public_ip_addresses</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether instances have no public IP address. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh">disable_ssh</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable SSH access to the VM. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.instanceMetadata">instance_metadata</a></code> | <code>typing.Mapping[str]</code> | Client-specified metadata key-value pairs, to be passed to the start-up script in the VM. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType">machine_type</a></code> | <code>str</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | Number of instances to pool for faster workstation startup. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount">service_account</a></code> | <code>str</code> | Email address of the service account that will be used on VM instances used to support this config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | Scopes to grant to the service_account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | Network tags to add to the Compute Engine machines backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags">vm_tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags to be bound to the VM instances backing the Workstations. |

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators"></a>

```python
accelerators: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `boost_configs`<sup>Optional</sup> <a name="boost_configs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs"></a>

```python
boost_configs: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]

boost_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boost_configs WorkstationsWorkstationConfigA#boost_configs}

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#confidential_instance_config WorkstationsWorkstationConfigA#confidential_instance_config}

---

##### `disable_public_ip_addresses`<sup>Optional</sup> <a name="disable_public_ip_addresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses"></a>

```python
disable_public_ip_addresses: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_public_ip_addresses WorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

##### `disable_ssh`<sup>Optional</sup> <a name="disable_ssh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh"></a>

```python
disable_ssh: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable SSH access to the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_ssh WorkstationsWorkstationConfigA#disable_ssh}

---

##### `enable_nested_virtualization`<sup>Optional</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `instance_metadata`<sup>Optional</sup> <a name="instance_metadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.instanceMetadata"></a>

```python
instance_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified metadata key-value pairs, to be passed to the start-up script in the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#instance_metadata WorkstationsWorkstationConfigA#instance_metadata}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `pool_size`<sup>Optional</sup> <a name="pool_size" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#service_account WorkstationsWorkstationConfigA#service_account}

---

##### `service_account_scopes`<sup>Optional</sup> <a name="service_account_scopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes"></a>

```python
service_account_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Scopes to grant to the service_account.

Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have 'iam.serviceAccounts.actAs' on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#service_account_scopes WorkstationsWorkstationConfigA#service_account_scopes}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#shielded_instance_config WorkstationsWorkstationConfigA#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#tags WorkstationsWorkstationConfigA#tags}

---

##### `vm_tags`<sup>Optional</sup> <a name="vm_tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags"></a>

```python
vm_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the VM instances backing the Workstations.

Tag keys and values have the same definition as
https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview
Keys must be in the format 'tagKeys/{tag_key_id}', and
values are in the format 'tagValues/456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#vm_tags WorkstationsWorkstationConfigA#vm_tags}

---

### WorkstationsWorkstationConfigHostGceInstanceAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators(
  count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type">type</a></code> | <code>str</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type"></a>

```python
type: str
```

- *Type:* str

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigs <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs(
  id: str,
  accelerators: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators] = None,
  boot_disk_size_gb: typing.Union[int, float] = None,
  enable_nested_virtualization: bool | IResolvable = None,
  machine_type: str = None,
  pool_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id">id</a></code> | <code>str</code> | The id to be used for the boost config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators">accelerators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>]</code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType">machine_type</a></code> | <code>str</code> | The type of machine that boosted VM instances will use—for example, e2-standard-4. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | Number of instances to pool for faster workstation boosting. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id"></a>

```python
id: str
```

- *Type:* str

The id to be used for the boost config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators"></a>

```python
accelerators: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `enable_nested_virtualization`<sup>Optional</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The type of machine that boosted VM instances will use—for example, e2-standard-4.

For more information about machine types that Cloud Workstations supports, see the list of available machine types https://cloud.google.com/workstations/docs/available-machine-types. Defaults to e2-standard-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `pool_size`<sup>Optional</sup> <a name="pool_size" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of instances to pool for faster workstation boosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators(
  count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type">type</a></code> | <code>str</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type"></a>

```python
type: str
```

- *Type:* str

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig(
  enable_confidential_compute: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the instance has confidential compute enabled. |

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_confidential_compute WorkstationsWorkstationConfigA#enable_confidential_compute}

---

### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig(
  enable_integrity_monitoring: bool | IResolvable = None,
  enable_secure_boot: bool | IResolvable = None,
  enable_vtpm: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the instance has the vTPM enabled. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_integrity_monitoring WorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_secure_boot WorkstationsWorkstationConfigA#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_vtpm WorkstationsWorkstationConfigA#enable_vtpm}

---

### WorkstationsWorkstationConfigPersistentDirectories <a name="WorkstationsWorkstationConfigPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories(
  gce_hd: WorkstationsWorkstationConfigPersistentDirectoriesGceHd = None,
  gce_pd: WorkstationsWorkstationConfigPersistentDirectoriesGcePd = None,
  mount_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd">gce_hd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | gce_hd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd">gce_pd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath">mount_path</a></code> | <code>str</code> | Location of this directory in the running workstation. |

---

##### `gce_hd`<sup>Optional</sup> <a name="gce_hd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd"></a>

```python
gce_hd: WorkstationsWorkstationConfigPersistentDirectoriesGceHd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

gce_hd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_hd WorkstationsWorkstationConfigA#gce_hd}

---

##### `gce_pd`<sup>Optional</sup> <a name="gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd"></a>

```python
gce_pd: WorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGceHd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd(
  archive_timeout: str = None,
  reclaim_policy: str = None,
  size_gb: typing.Union[int, float] = None,
  source_snapshot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout">archive_timeout</a></code> | <code>str</code> | How long to wait before converting the disk into a snapshot. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"]. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | The GB capacity of a persistent home directory. Defaults to '200'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | Name of the snapshot to use as the source for the disk. |

---

##### `archive_timeout`<sup>Optional</sup> <a name="archive_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout"></a>

```python
archive_timeout: str
```

- *Type:* str

How long to wait before converting the disk into a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#archive_timeout WorkstationsWorkstationConfigA#archive_timeout}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The GB capacity of a persistent home directory. Defaults to '200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

Name of the snapshot to use as the source for the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGcePd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd(
  disk_type: str = None,
  fs_type: str = None,
  reclaim_policy: str = None,
  size_gb: typing.Union[int, float] = None,
  source_snapshot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType">disk_type</a></code> | <code>str</code> | The type of the persistent disk for the home directory. Defaults to 'pd-standard'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType">fs_type</a></code> | <code>str</code> | Type of file system that the disk should be formatted with. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | Whether the persistent disk should be deleted when the workstation is deleted. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | The GB capacity of a persistent home directory for each workstation created with this configuration. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | Name of the snapshot to use as the source for the disk. |

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The type of the persistent disk for the home directory. Defaults to 'pd-standard'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if 'sourceSnapshot' is set. Defaults to 'ext4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#fs_type WorkstationsWorkstationConfigA#fs_type}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

Whether the persistent disk should be deleted when the workstation is deleted.

Valid values are 'DELETE' and 'RETAIN'. Defaults to 'DELETE'. Possible values: ["DELETE", "RETAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The GB capacity of a persistent home directory for each workstation created with this configuration.

Must be empty if 'sourceSnapshot' is set.
Valid values are '10', '50', '100', '200', '500', or '1000'. Defaults to '200'. If less than '200' GB, the 'diskType' must be 'pd-balanced' or 'pd-ssd'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

Name of the snapshot to use as the source for the disk.

This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, 'sizeGb' and 'fsType' must be empty. Can only be updated if it has an existing value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigReadinessChecks <a name="WorkstationsWorkstationConfigReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks(
  path: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path">path</a></code> | <code>str</code> | Path to which the request should be sent. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port to which the request should be sent. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path"></a>

```python
path: str
```

- *Type:* str

Path to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#path WorkstationsWorkstationConfigA#path}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#port WorkstationsWorkstationConfigA#port}

---

### WorkstationsWorkstationConfigTimeouts <a name="WorkstationsWorkstationConfigTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationConfigAllowedPortsList <a name="WorkstationsWorkstationConfigAllowedPortsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigAllowedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkstationsWorkstationConfigAllowedPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>]

---


### WorkstationsWorkstationConfigAllowedPortsOutputReference <a name="WorkstationsWorkstationConfigAllowedPortsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast">reset_last</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_first` <a name="reset_first" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast"></a>

```python
def reset_last() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigAllowedPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>

---


### WorkstationsWorkstationConfigConditionsList <a name="WorkstationsWorkstationConfigConditionsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkstationsWorkstationConfigConditionsOutputReference <a name="WorkstationsWorkstationConfigConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigConditions
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a>

---


### WorkstationsWorkstationConfigContainerOutputReference <a name="WorkstationsWorkstationConfigContainerOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser">reset_run_as_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_run_as_user` <a name="reset_run_as_user" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser"></a>

```python
def reset_run_as_user() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput">env_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput">run_as_user_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env">env</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput"></a>

```python
env_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `run_as_user_input`<sup>Optional</sup> <a name="run_as_user_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput"></a>

```python
run_as_user_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---


### WorkstationsWorkstationConfigEncryptionKeyOutputReference <a name="WorkstationsWorkstationConfigEncryptionKeyOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage">reset_source_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_source_image` <a name="reset_source_image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage"></a>

```python
def reset_source_image() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput">source_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_image_input`<sup>Optional</sup> <a name="source_image_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput"></a>

```python
source_image_input: str
```

- *Type:* str

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigEphemeralDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesList <a name="WorkstationsWorkstationConfigEphemeralDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkstationsWorkstationConfigEphemeralDirectories]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>]

---


### WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd">put_gce_pd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd">reset_gce_pd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gce_pd` <a name="put_gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd"></a>

```python
def put_gce_pd(
  disk_type: str = None,
  read_only: bool | IResolvable = None,
  source_image: str = None,
  source_snapshot: str = None
) -> None
```

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd.parameter.diskType"></a>

- *Type:* str

Type of the disk to use. Defaults to '"pd-standard"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd.parameter.readOnly"></a>

- *Type:* bool | cdktn.IResolvable

Whether the disk is read only.

If true, the disk may be shared by multiple VMs and 'sourceSnapshot' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#read_only WorkstationsWorkstationConfigA#read_only}

---

###### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd.parameter.sourceImage"></a>

- *Type:* str

Name of the disk image to use as the source for the disk.

Must be empty 'sourceSnapshot' is set.
Updating 'sourceImage' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_image WorkstationsWorkstationConfigA#source_image}

---

###### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd.parameter.sourceSnapshot"></a>

- *Type:* str

Name of the snapshot to use as the source for the disk.

Must be empty if 'sourceImage' is set.
Must be empty if 'read_only' is false.
Updating 'source_snapshot' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

##### `reset_gce_pd` <a name="reset_gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd"></a>

```python
def reset_gce_pd() -> None
```

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd">gce_pd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput">gce_pd_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gce_pd`<sup>Required</sup> <a name="gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd"></a>

```python
gce_pd: WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a>

---

##### `gce_pd_input`<sup>Optional</sup> <a name="gce_pd_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput"></a>

```python
gce_pd_input: WorkstationsWorkstationConfigEphemeralDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigEphemeralDirectories
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigHostGceInstanceAccelerators
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>]

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators">put_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators">reset_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization">reset_enable_nested_virtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize">reset_pool_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerators` <a name="put_accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators"></a>

```python
def put_accelerators(
  value: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>]

---

##### `reset_accelerators` <a name="reset_accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators"></a>

```python
def reset_accelerators() -> None
```

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_enable_nested_virtualization` <a name="reset_enable_nested_virtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization"></a>

```python
def reset_enable_nested_virtualization() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_pool_size` <a name="reset_pool_size" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize"></a>

```python
def reset_pool_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput">accelerators_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput">enable_nested_virtualization_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput">pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators"></a>

```python
accelerators: WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a>

---

##### `accelerators_input`<sup>Optional</sup> <a name="accelerators_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput"></a>

```python
accelerators_input: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>]

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_nested_virtualization_input`<sup>Optional</sup> <a name="enable_nested_virtualization_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput"></a>

```python
enable_nested_virtualization_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `pool_size_input`<sup>Optional</sup> <a name="pool_size_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput"></a>

```python
pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigHostGceInstanceBoostConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>

---


### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">reset_enable_confidential_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_confidential_compute` <a name="reset_enable_confidential_compute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```python
def reset_enable_confidential_compute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enable_confidential_compute_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_confidential_compute_input`<sup>Optional</sup> <a name="enable_confidential_compute_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```python
enable_confidential_compute_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostGceInstanceOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators">put_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs">put_boost_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig">put_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators">reset_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs">reset_boost_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig">reset_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses">reset_disable_public_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh">reset_disable_ssh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization">reset_enable_nested_virtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetInstanceMetadata">reset_instance_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize">reset_pool_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes">reset_service_account_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags">reset_vm_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerators` <a name="put_accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators"></a>

```python
def put_accelerators(
  value: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceAccelerators]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]

---

##### `put_boost_configs` <a name="put_boost_configs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs"></a>

```python
def put_boost_configs(
  value: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]

---

##### `put_confidential_instance_config` <a name="put_confidential_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig"></a>

```python
def put_confidential_instance_config(
  enable_confidential_compute: bool | IResolvable = None
) -> None
```

###### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig.parameter.enableConfidentialCompute"></a>

- *Type:* bool | cdktn.IResolvable

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_confidential_compute WorkstationsWorkstationConfigA#enable_confidential_compute}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: bool | IResolvable = None,
  enable_secure_boot: bool | IResolvable = None,
  enable_vtpm: bool | IResolvable = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* bool | cdktn.IResolvable

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_integrity_monitoring WorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* bool | cdktn.IResolvable

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_secure_boot WorkstationsWorkstationConfigA#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* bool | cdktn.IResolvable

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_vtpm WorkstationsWorkstationConfigA#enable_vtpm}

---

##### `reset_accelerators` <a name="reset_accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators"></a>

```python
def reset_accelerators() -> None
```

##### `reset_boost_configs` <a name="reset_boost_configs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs"></a>

```python
def reset_boost_configs() -> None
```

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_confidential_instance_config` <a name="reset_confidential_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig"></a>

```python
def reset_confidential_instance_config() -> None
```

##### `reset_disable_public_ip_addresses` <a name="reset_disable_public_ip_addresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses"></a>

```python
def reset_disable_public_ip_addresses() -> None
```

##### `reset_disable_ssh` <a name="reset_disable_ssh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh"></a>

```python
def reset_disable_ssh() -> None
```

##### `reset_enable_nested_virtualization` <a name="reset_enable_nested_virtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization"></a>

```python
def reset_enable_nested_virtualization() -> None
```

##### `reset_instance_metadata` <a name="reset_instance_metadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetInstanceMetadata"></a>

```python
def reset_instance_metadata() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_pool_size` <a name="reset_pool_size" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize"></a>

```python
def reset_pool_size() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_service_account_scopes` <a name="reset_service_account_scopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes"></a>

```python
def reset_service_account_scopes() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vm_tags` <a name="reset_vm_tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags"></a>

```python
def reset_vm_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs">boost_configs</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput">accelerators_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput">boost_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput">confidential_instance_config_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput">disable_public_ip_addresses_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput">disable_ssh_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput">enable_nested_virtualization_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadataInput">instance_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput">pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput">service_account_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput">vm_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses">disable_public_ip_addresses</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh">disable_ssh</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadata">instance_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags">vm_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators"></a>

```python
accelerators: WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a>

---

##### `boost_configs`<sup>Required</sup> <a name="boost_configs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs"></a>

```python
boost_configs: WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a>

---

##### `confidential_instance_config`<sup>Required</sup> <a name="confidential_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a>

---

##### `accelerators_input`<sup>Optional</sup> <a name="accelerators_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput"></a>

```python
accelerators_input: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceAccelerators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]

---

##### `boost_configs_input`<sup>Optional</sup> <a name="boost_configs_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput"></a>

```python
boost_configs_input: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidential_instance_config_input`<sup>Optional</sup> <a name="confidential_instance_config_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput"></a>

```python
confidential_instance_config_input: WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `disable_public_ip_addresses_input`<sup>Optional</sup> <a name="disable_public_ip_addresses_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput"></a>

```python
disable_public_ip_addresses_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_ssh_input`<sup>Optional</sup> <a name="disable_ssh_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput"></a>

```python
disable_ssh_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_nested_virtualization_input`<sup>Optional</sup> <a name="enable_nested_virtualization_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput"></a>

```python
enable_nested_virtualization_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_metadata_input`<sup>Optional</sup> <a name="instance_metadata_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadataInput"></a>

```python
instance_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `pool_size_input`<sup>Optional</sup> <a name="pool_size_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput"></a>

```python
pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_account_scopes_input`<sup>Optional</sup> <a name="service_account_scopes_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput"></a>

```python
service_account_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vm_tags_input`<sup>Optional</sup> <a name="vm_tags_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput"></a>

```python
vm_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_public_ip_addresses`<sup>Required</sup> <a name="disable_public_ip_addresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses"></a>

```python
disable_public_ip_addresses: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_ssh`<sup>Required</sup> <a name="disable_ssh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh"></a>

```python
disable_ssh: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_metadata`<sup>Required</sup> <a name="instance_metadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadata"></a>

```python
instance_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `service_account_scopes`<sup>Required</sup> <a name="service_account_scopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes"></a>

```python
service_account_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vm_tags`<sup>Required</sup> <a name="vm_tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags"></a>

```python
vm_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---


### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostOutputReference <a name="WorkstationsWorkstationConfigHostOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance">put_gce_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance">reset_gce_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gce_instance` <a name="put_gce_instance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance"></a>

```python
def put_gce_instance(
  accelerators: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceAccelerators] = None,
  boost_configs: IResolvable | typing.List[WorkstationsWorkstationConfigHostGceInstanceBoostConfigs] = None,
  boot_disk_size_gb: typing.Union[int, float] = None,
  confidential_instance_config: WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig = None,
  disable_public_ip_addresses: bool | IResolvable = None,
  disable_ssh: bool | IResolvable = None,
  enable_nested_virtualization: bool | IResolvable = None,
  instance_metadata: typing.Mapping[str] = None,
  machine_type: str = None,
  pool_size: typing.Union[int, float] = None,
  service_account: str = None,
  service_account_scopes: typing.List[str] = None,
  shielded_instance_config: WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  vm_tags: typing.Mapping[str] = None
) -> None
```

###### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.accelerators"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

###### `boost_configs`<sup>Optional</sup> <a name="boost_configs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.boostConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>]

boost_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boost_configs WorkstationsWorkstationConfigA#boost_configs}

---

###### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

###### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.confidentialInstanceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#confidential_instance_config WorkstationsWorkstationConfigA#confidential_instance_config}

---

###### `disable_public_ip_addresses`<sup>Optional</sup> <a name="disable_public_ip_addresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.disablePublicIpAddresses"></a>

- *Type:* bool | cdktn.IResolvable

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_public_ip_addresses WorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

###### `disable_ssh`<sup>Optional</sup> <a name="disable_ssh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.disableSsh"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable SSH access to the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_ssh WorkstationsWorkstationConfigA#disable_ssh}

---

###### `enable_nested_virtualization`<sup>Optional</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.enableNestedVirtualization"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

###### `instance_metadata`<sup>Optional</sup> <a name="instance_metadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.instanceMetadata"></a>

- *Type:* typing.Mapping[str]

Client-specified metadata key-value pairs, to be passed to the start-up script in the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#instance_metadata WorkstationsWorkstationConfigA#instance_metadata}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.machineType"></a>

- *Type:* str

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

###### `pool_size`<sup>Optional</sup> <a name="pool_size" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.poolSize"></a>

- *Type:* typing.Union[int, float]

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.serviceAccount"></a>

- *Type:* str

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#service_account WorkstationsWorkstationConfigA#service_account}

---

###### `service_account_scopes`<sup>Optional</sup> <a name="service_account_scopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.serviceAccountScopes"></a>

- *Type:* typing.List[str]

Scopes to grant to the service_account.

Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have 'iam.serviceAccounts.actAs' on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#service_account_scopes WorkstationsWorkstationConfigA#service_account_scopes}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#shielded_instance_config WorkstationsWorkstationConfigA#shielded_instance_config}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.tags"></a>

- *Type:* typing.List[str]

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#tags WorkstationsWorkstationConfigA#tags}

---

###### `vm_tags`<sup>Optional</sup> <a name="vm_tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.vmTags"></a>

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the VM instances backing the Workstations.

Tag keys and values have the same definition as
https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview
Keys must be in the format 'tagKeys/{tag_key_id}', and
values are in the format 'tagValues/456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#vm_tags WorkstationsWorkstationConfigA#vm_tags}

---

##### `reset_gce_instance` <a name="reset_gce_instance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance"></a>

```python
def reset_gce_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance">gce_instance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput">gce_instance_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gce_instance`<sup>Required</sup> <a name="gce_instance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance"></a>

```python
gce_instance: WorkstationsWorkstationConfigHostGceInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a>

---

##### `gce_instance_input`<sup>Optional</sup> <a name="gce_instance_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput"></a>

```python
gce_instance_input: WorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout">reset_archive_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy">reset_reclaim_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb">reset_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_timeout` <a name="reset_archive_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout"></a>

```python
def reset_archive_timeout() -> None
```

##### `reset_reclaim_policy` <a name="reset_reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy"></a>

```python
def reset_reclaim_policy() -> None
```

##### `reset_size_gb` <a name="reset_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb"></a>

```python
def reset_size_gb() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput">archive_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput">reclaim_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput">size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout">archive_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_timeout_input`<sup>Optional</sup> <a name="archive_timeout_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput"></a>

```python
archive_timeout_input: str
```

- *Type:* str

---

##### `reclaim_policy_input`<sup>Optional</sup> <a name="reclaim_policy_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput"></a>

```python
reclaim_policy_input: str
```

- *Type:* str

---

##### `size_gb_input`<sup>Optional</sup> <a name="size_gb_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput"></a>

```python
size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `archive_timeout`<sup>Required</sup> <a name="archive_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout"></a>

```python
archive_timeout: str
```

- *Type:* str

---

##### `reclaim_policy`<sup>Required</sup> <a name="reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigPersistentDirectoriesGceHd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy">reset_reclaim_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb">reset_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_reclaim_policy` <a name="reset_reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy"></a>

```python
def reset_reclaim_policy() -> None
```

##### `reset_size_gb` <a name="reset_size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb"></a>

```python
def reset_size_gb() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput">reclaim_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput">size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `reclaim_policy_input`<sup>Optional</sup> <a name="reclaim_policy_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput"></a>

```python
reclaim_policy_input: str
```

- *Type:* str

---

##### `size_gb_input`<sup>Optional</sup> <a name="size_gb_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput"></a>

```python
size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `reclaim_policy`<sup>Required</sup> <a name="reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesList <a name="WorkstationsWorkstationConfigPersistentDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigPersistentDirectoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkstationsWorkstationConfigPersistentDirectories]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>]

---


### WorkstationsWorkstationConfigPersistentDirectoriesOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd">put_gce_hd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd">put_gce_pd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd">reset_gce_hd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd">reset_gce_pd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gce_hd` <a name="put_gce_hd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd"></a>

```python
def put_gce_hd(
  archive_timeout: str = None,
  reclaim_policy: str = None,
  size_gb: typing.Union[int, float] = None,
  source_snapshot: str = None
) -> None
```

###### `archive_timeout`<sup>Optional</sup> <a name="archive_timeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd.parameter.archiveTimeout"></a>

- *Type:* str

How long to wait before converting the disk into a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#archive_timeout WorkstationsWorkstationConfigA#archive_timeout}

---

###### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd.parameter.reclaimPolicy"></a>

- *Type:* str

Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

###### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd.parameter.sizeGb"></a>

- *Type:* typing.Union[int, float]

The GB capacity of a persistent home directory. Defaults to '200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

###### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd.parameter.sourceSnapshot"></a>

- *Type:* str

Name of the snapshot to use as the source for the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

##### `put_gce_pd` <a name="put_gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd"></a>

```python
def put_gce_pd(
  disk_type: str = None,
  fs_type: str = None,
  reclaim_policy: str = None,
  size_gb: typing.Union[int, float] = None,
  source_snapshot: str = None
) -> None
```

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.diskType"></a>

- *Type:* str

The type of the persistent disk for the home directory. Defaults to 'pd-standard'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.fsType"></a>

- *Type:* str

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if 'sourceSnapshot' is set. Defaults to 'ext4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#fs_type WorkstationsWorkstationConfigA#fs_type}

---

###### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.reclaimPolicy"></a>

- *Type:* str

Whether the persistent disk should be deleted when the workstation is deleted.

Valid values are 'DELETE' and 'RETAIN'. Defaults to 'DELETE'. Possible values: ["DELETE", "RETAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

###### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.sizeGb"></a>

- *Type:* typing.Union[int, float]

The GB capacity of a persistent home directory for each workstation created with this configuration.

Must be empty if 'sourceSnapshot' is set.
Valid values are '10', '50', '100', '200', '500', or '1000'. Defaults to '200'. If less than '200' GB, the 'diskType' must be 'pd-balanced' or 'pd-ssd'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

###### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.sourceSnapshot"></a>

- *Type:* str

Name of the snapshot to use as the source for the disk.

This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, 'sizeGb' and 'fsType' must be empty. Can only be updated if it has an existing value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

##### `reset_gce_hd` <a name="reset_gce_hd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd"></a>

```python
def reset_gce_hd() -> None
```

##### `reset_gce_pd` <a name="reset_gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd"></a>

```python
def reset_gce_pd() -> None
```

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd">gce_hd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd">gce_pd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput">gce_hd_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput">gce_pd_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gce_hd`<sup>Required</sup> <a name="gce_hd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd"></a>

```python
gce_hd: WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a>

---

##### `gce_pd`<sup>Required</sup> <a name="gce_pd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd"></a>

```python
gce_pd: WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a>

---

##### `gce_hd_input`<sup>Optional</sup> <a name="gce_hd_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput"></a>

```python
gce_hd_input: WorkstationsWorkstationConfigPersistentDirectoriesGceHd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---

##### `gce_pd_input`<sup>Optional</sup> <a name="gce_pd_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput"></a>

```python
gce_pd_input: WorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigPersistentDirectories
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>

---


### WorkstationsWorkstationConfigReadinessChecksList <a name="WorkstationsWorkstationConfigReadinessChecksList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationConfigReadinessChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkstationsWorkstationConfigReadinessChecks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>]

---


### WorkstationsWorkstationConfigReadinessChecksOutputReference <a name="WorkstationsWorkstationConfigReadinessChecksOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigReadinessChecks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>

---


### WorkstationsWorkstationConfigTimeoutsOutputReference <a name="WorkstationsWorkstationConfigTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_config

workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---



