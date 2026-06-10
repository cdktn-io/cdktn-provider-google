# `workstationsWorkstationConfig` Submodule <a name="`workstationsWorkstationConfig` Submodule" id="@cdktn/provider-google.workstationsWorkstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationConfigA <a name="WorkstationsWorkstationConfigA" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config google_workstations_workstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigA;

WorkstationsWorkstationConfigA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .workstationClusterId(java.lang.String)
    .workstationConfigId(java.lang.String)
//  .allowedPorts(IResolvable|java.util.List<WorkstationsWorkstationConfigAllowedPorts>)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .container(WorkstationsWorkstationConfigContainer)
//  .deletionPolicy(java.lang.String)
//  .disableTcpConnections(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .enableAuditAgent(java.lang.Boolean|IResolvable)
//  .encryptionKey(WorkstationsWorkstationConfigEncryptionKey)
//  .ephemeralDirectories(IResolvable|java.util.List<WorkstationsWorkstationConfigEphemeralDirectories>)
//  .host(WorkstationsWorkstationConfigHost)
//  .id(java.lang.String)
//  .idleTimeout(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxUsableWorkstations(java.lang.Number)
//  .persistentDirectories(IResolvable|java.util.List<WorkstationsWorkstationConfigPersistentDirectories>)
//  .project(java.lang.String)
//  .readinessChecks(IResolvable|java.util.List<WorkstationsWorkstationConfigReadinessChecks>)
//  .replicaZones(java.util.List<java.lang.String>)
//  .runningTimeout(java.lang.String)
//  .timeouts(WorkstationsWorkstationConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationClusterId">workstationClusterId</a></code> | <code>java.lang.String</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationConfigId">workstationConfigId</a></code> | <code>java.lang.String</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.allowedPorts">allowedPorts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>></code> | allowed_ports block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.container">container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.disableTcpConnections">disableTcpConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables support for plain TCP connections in the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.enableAuditAgent">enableAuditAgent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable Linux 'auditd' logging on the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.ephemeralDirectories">ephemeralDirectories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>></code> | ephemeral_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.host">host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | How long to wait before automatically stopping an instance that hasn't recently received any user traffic. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.maxUsableWorkstations">maxUsableWorkstations</a></code> | <code>java.lang.Number</code> | Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.persistentDirectories">persistentDirectories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>></code> | persistent_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.readinessChecks">readinessChecks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>></code> | readiness_checks block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.replicaZones">replicaZones</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the zones used to replicate the VM and disk resources within the region. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.runningTimeout">runningTimeout</a></code> | <code>java.lang.String</code> | How long to wait before automatically stopping a workstation after it was started. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#location WorkstationsWorkstationConfigA#location}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationClusterId"></a>

- *Type:* java.lang.String

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#workstation_cluster_id WorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.workstationConfigId"></a>

- *Type:* java.lang.String

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#workstation_config_id WorkstationsWorkstationConfigA#workstation_config_id}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.allowedPorts"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>>

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#allowed_ports WorkstationsWorkstationConfigA#allowed_ports}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#annotations WorkstationsWorkstationConfigA#annotations}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.container"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#container WorkstationsWorkstationConfigA#container}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#deletion_policy WorkstationsWorkstationConfigA#deletion_policy}

---

##### `disableTcpConnections`<sup>Optional</sup> <a name="disableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.disableTcpConnections"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables support for plain TCP connections in the workstation.

By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#disable_tcp_connections WorkstationsWorkstationConfigA#disable_tcp_connections}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#display_name WorkstationsWorkstationConfigA#display_name}

---

##### `enableAuditAgent`<sup>Optional</sup> <a name="enableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.enableAuditAgent"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable Linux 'auditd' logging on the workstation.

When enabled, a service account must also be specified that has 'logging.buckets.write' permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_audit_agent WorkstationsWorkstationConfigA#enable_audit_agent}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#encryption_key WorkstationsWorkstationConfigA#encryption_key}

---

##### `ephemeralDirectories`<sup>Optional</sup> <a name="ephemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.ephemeralDirectories"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>>

ephemeral_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#ephemeral_directories WorkstationsWorkstationConfigA#ephemeral_directories}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.host"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#host WorkstationsWorkstationConfigA#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.idleTimeout"></a>

- *Type:* java.lang.String

How long to wait before automatically stopping an instance that hasn't recently received any user traffic.

A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#idle_timeout WorkstationsWorkstationConfigA#idle_timeout}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#labels WorkstationsWorkstationConfigA#labels}

---

##### `maxUsableWorkstations`<sup>Optional</sup> <a name="maxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.maxUsableWorkstations"></a>

- *Type:* java.lang.Number

Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#max_usable_workstations WorkstationsWorkstationConfigA#max_usable_workstations}

---

##### `persistentDirectories`<sup>Optional</sup> <a name="persistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.persistentDirectories"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>>

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#persistent_directories WorkstationsWorkstationConfigA#persistent_directories}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}.

---

##### `readinessChecks`<sup>Optional</sup> <a name="readinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.readinessChecks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>>

readiness_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#readiness_checks WorkstationsWorkstationConfigA#readiness_checks}

---

##### `replicaZones`<sup>Optional</sup> <a name="replicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.replicaZones"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the zones used to replicate the VM and disk resources within the region.

If set, exactly two zones within the workstation cluster's region must be specified—for example, '['us-central1-a', 'us-central1-f']'.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#replica_zones WorkstationsWorkstationConfigA#replica_zones}

---

##### `runningTimeout`<sup>Optional</sup> <a name="runningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.runningTimeout"></a>

- *Type:* java.lang.String

How long to wait before automatically stopping a workstation after it was started.

A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if 'encryption_key' is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#running_timeout WorkstationsWorkstationConfigA#running_timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#timeouts WorkstationsWorkstationConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts">putAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories">putEphemeralDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories">putPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks">putReadinessChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections">resetDisableTcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent">resetEnableAuditAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories">resetEphemeralDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations">resetMaxUsableWorkstations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories">resetPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks">resetReadinessChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones">resetReplicaZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout">resetRunningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedPorts` <a name="putAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts"></a>

```java
public void putAllowedPorts(IResolvable|java.util.List<WorkstationsWorkstationConfigAllowedPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>>

---

##### `putContainer` <a name="putContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer"></a>

```java
public void putContainer(WorkstationsWorkstationConfigContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey"></a>

```java
public void putEncryptionKey(WorkstationsWorkstationConfigEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---

##### `putEphemeralDirectories` <a name="putEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories"></a>

```java
public void putEphemeralDirectories(IResolvable|java.util.List<WorkstationsWorkstationConfigEphemeralDirectories> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>>

---

##### `putHost` <a name="putHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost"></a>

```java
public void putHost(WorkstationsWorkstationConfigHost value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---

##### `putPersistentDirectories` <a name="putPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories"></a>

```java
public void putPersistentDirectories(IResolvable|java.util.List<WorkstationsWorkstationConfigPersistentDirectories> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>>

---

##### `putReadinessChecks` <a name="putReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks"></a>

```java
public void putReadinessChecks(IResolvable|java.util.List<WorkstationsWorkstationConfigReadinessChecks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts"></a>

```java
public void putTimeouts(WorkstationsWorkstationConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts"></a>

```java
public void resetAllowedPorts()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisableTcpConnections` <a name="resetDisableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections"></a>

```java
public void resetDisableTcpConnections()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnableAuditAgent` <a name="resetEnableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent"></a>

```java
public void resetEnableAuditAgent()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetEphemeralDirectories` <a name="resetEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories"></a>

```java
public void resetEphemeralDirectories()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId"></a>

```java
public void resetId()
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaxUsableWorkstations` <a name="resetMaxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations"></a>

```java
public void resetMaxUsableWorkstations()
```

##### `resetPersistentDirectories` <a name="resetPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories"></a>

```java
public void resetPersistentDirectories()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject"></a>

```java
public void resetProject()
```

##### `resetReadinessChecks` <a name="resetReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks"></a>

```java
public void resetReadinessChecks()
```

##### `resetReplicaZones` <a name="resetReplicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones"></a>

```java
public void resetReplicaZones()
```

##### `resetRunningTimeout` <a name="resetRunningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout"></a>

```java
public void resetRunningTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigA;

WorkstationsWorkstationConfigA.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigA;

WorkstationsWorkstationConfigA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigA;

WorkstationsWorkstationConfigA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigA;

WorkstationsWorkstationConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkstationsWorkstationConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkstationsWorkstationConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkstationsWorkstationConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts">allowedPorts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded">degraded</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories">ephemeralDirectories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host">host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories">persistentDirectories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks">readinessChecks</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput">allowedPortsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput">containerInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput">disableTcpConnectionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput">enableAuditAgentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput">ephemeralDirectoriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput">hostInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput">maxUsableWorkstationsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput">persistentDirectoriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput">readinessChecksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput">replicaZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput">runningTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput">workstationClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput">workstationConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections">disableTcpConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent">enableAuditAgent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations">maxUsableWorkstations</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones">replicaZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout">runningTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId">workstationClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId">workstationConfigId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts"></a>

```java
public WorkstationsWorkstationConfigAllowedPortsList getAllowedPorts();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions"></a>

```java
public WorkstationsWorkstationConfigConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container"></a>

```java
public WorkstationsWorkstationConfigContainerOutputReference getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded"></a>

```java
public IResolvable getDegraded();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey"></a>

```java
public WorkstationsWorkstationConfigEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a>

---

##### `ephemeralDirectories`<sup>Required</sup> <a name="ephemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories"></a>

```java
public WorkstationsWorkstationConfigEphemeralDirectoriesList getEphemeralDirectories();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host"></a>

```java
public WorkstationsWorkstationConfigHostOutputReference getHost();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `persistentDirectories`<sup>Required</sup> <a name="persistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesList getPersistentDirectories();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a>

---

##### `readinessChecks`<sup>Required</sup> <a name="readinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks"></a>

```java
public WorkstationsWorkstationConfigReadinessChecksList getReadinessChecks();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts"></a>

```java
public WorkstationsWorkstationConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigAllowedPorts> getAllowedPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput"></a>

```java
public WorkstationsWorkstationConfigContainer getContainerInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disableTcpConnectionsInput`<sup>Optional</sup> <a name="disableTcpConnectionsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableTcpConnectionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableAuditAgentInput`<sup>Optional</sup> <a name="enableAuditAgentInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableAuditAgentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput"></a>

```java
public WorkstationsWorkstationConfigEncryptionKey getEncryptionKeyInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---

##### `ephemeralDirectoriesInput`<sup>Optional</sup> <a name="ephemeralDirectoriesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigEphemeralDirectories> getEphemeralDirectoriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput"></a>

```java
public WorkstationsWorkstationConfigHost getHostInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput"></a>

```java
public java.lang.String getIdleTimeoutInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxUsableWorkstationsInput`<sup>Optional</sup> <a name="maxUsableWorkstationsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput"></a>

```java
public java.lang.Number getMaxUsableWorkstationsInput();
```

- *Type:* java.lang.Number

---

##### `persistentDirectoriesInput`<sup>Optional</sup> <a name="persistentDirectoriesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigPersistentDirectories> getPersistentDirectoriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `readinessChecksInput`<sup>Optional</sup> <a name="readinessChecksInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigReadinessChecks> getReadinessChecksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>>

---

##### `replicaZonesInput`<sup>Optional</sup> <a name="replicaZonesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput"></a>

```java
public java.util.List<java.lang.String> getReplicaZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runningTimeoutInput`<sup>Optional</sup> <a name="runningTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput"></a>

```java
public java.lang.String getRunningTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput"></a>

```java
public IResolvable|WorkstationsWorkstationConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---

##### `workstationClusterIdInput`<sup>Optional</sup> <a name="workstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput"></a>

```java
public java.lang.String getWorkstationClusterIdInput();
```

- *Type:* java.lang.String

---

##### `workstationConfigIdInput`<sup>Optional</sup> <a name="workstationConfigIdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput"></a>

```java
public java.lang.String getWorkstationConfigIdInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disableTcpConnections`<sup>Required</sup> <a name="disableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections"></a>

```java
public java.lang.Boolean|IResolvable getDisableTcpConnections();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableAuditAgent`<sup>Required</sup> <a name="enableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent"></a>

```java
public java.lang.Boolean|IResolvable getEnableAuditAgent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxUsableWorkstations`<sup>Required</sup> <a name="maxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations"></a>

```java
public java.lang.Number getMaxUsableWorkstations();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `replicaZones`<sup>Required</sup> <a name="replicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones"></a>

```java
public java.util.List<java.lang.String> getReplicaZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runningTimeout`<sup>Required</sup> <a name="runningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout"></a>

```java
public java.lang.String getRunningTimeout();
```

- *Type:* java.lang.String

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId"></a>

```java
public java.lang.String getWorkstationClusterId();
```

- *Type:* java.lang.String

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId"></a>

```java
public java.lang.String getWorkstationConfigId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationConfigAConfig <a name="WorkstationsWorkstationConfigAConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigAConfig;

WorkstationsWorkstationConfigAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .workstationClusterId(java.lang.String)
    .workstationConfigId(java.lang.String)
//  .allowedPorts(IResolvable|java.util.List<WorkstationsWorkstationConfigAllowedPorts>)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .container(WorkstationsWorkstationConfigContainer)
//  .deletionPolicy(java.lang.String)
//  .disableTcpConnections(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .enableAuditAgent(java.lang.Boolean|IResolvable)
//  .encryptionKey(WorkstationsWorkstationConfigEncryptionKey)
//  .ephemeralDirectories(IResolvable|java.util.List<WorkstationsWorkstationConfigEphemeralDirectories>)
//  .host(WorkstationsWorkstationConfigHost)
//  .id(java.lang.String)
//  .idleTimeout(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxUsableWorkstations(java.lang.Number)
//  .persistentDirectories(IResolvable|java.util.List<WorkstationsWorkstationConfigPersistentDirectories>)
//  .project(java.lang.String)
//  .readinessChecks(IResolvable|java.util.List<WorkstationsWorkstationConfigReadinessChecks>)
//  .replicaZones(java.util.List<java.lang.String>)
//  .runningTimeout(java.lang.String)
//  .timeouts(WorkstationsWorkstationConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId">workstationClusterId</a></code> | <code>java.lang.String</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId">workstationConfigId</a></code> | <code>java.lang.String</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts">allowedPorts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>></code> | allowed_ports block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections">disableTcpConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables support for plain TCP connections in the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent">enableAuditAgent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable Linux 'auditd' logging on the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories">ephemeralDirectories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>></code> | ephemeral_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host">host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | How long to wait before automatically stopping an instance that hasn't recently received any user traffic. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations">maxUsableWorkstations</a></code> | <code>java.lang.Number</code> | Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories">persistentDirectories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>></code> | persistent_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks">readinessChecks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>></code> | readiness_checks block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones">replicaZones</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the zones used to replicate the VM and disk resources within the region. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout">runningTimeout</a></code> | <code>java.lang.String</code> | How long to wait before automatically stopping a workstation after it was started. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#location WorkstationsWorkstationConfigA#location}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId"></a>

```java
public java.lang.String getWorkstationClusterId();
```

- *Type:* java.lang.String

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#workstation_cluster_id WorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId"></a>

```java
public java.lang.String getWorkstationConfigId();
```

- *Type:* java.lang.String

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#workstation_config_id WorkstationsWorkstationConfigA#workstation_config_id}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigAllowedPorts> getAllowedPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>>

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#allowed_ports WorkstationsWorkstationConfigA#allowed_ports}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#annotations WorkstationsWorkstationConfigA#annotations}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container"></a>

```java
public WorkstationsWorkstationConfigContainer getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#container WorkstationsWorkstationConfigA#container}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#deletion_policy WorkstationsWorkstationConfigA#deletion_policy}

---

##### `disableTcpConnections`<sup>Optional</sup> <a name="disableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections"></a>

```java
public java.lang.Boolean|IResolvable getDisableTcpConnections();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables support for plain TCP connections in the workstation.

By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#disable_tcp_connections WorkstationsWorkstationConfigA#disable_tcp_connections}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#display_name WorkstationsWorkstationConfigA#display_name}

---

##### `enableAuditAgent`<sup>Optional</sup> <a name="enableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent"></a>

```java
public java.lang.Boolean|IResolvable getEnableAuditAgent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable Linux 'auditd' logging on the workstation.

When enabled, a service account must also be specified that has 'logging.buckets.write' permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_audit_agent WorkstationsWorkstationConfigA#enable_audit_agent}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey"></a>

```java
public WorkstationsWorkstationConfigEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#encryption_key WorkstationsWorkstationConfigA#encryption_key}

---

##### `ephemeralDirectories`<sup>Optional</sup> <a name="ephemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigEphemeralDirectories> getEphemeralDirectories();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>>

ephemeral_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#ephemeral_directories WorkstationsWorkstationConfigA#ephemeral_directories}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host"></a>

```java
public WorkstationsWorkstationConfigHost getHost();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#host WorkstationsWorkstationConfigA#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

How long to wait before automatically stopping an instance that hasn't recently received any user traffic.

A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#idle_timeout WorkstationsWorkstationConfigA#idle_timeout}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#labels WorkstationsWorkstationConfigA#labels}

---

##### `maxUsableWorkstations`<sup>Optional</sup> <a name="maxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations"></a>

```java
public java.lang.Number getMaxUsableWorkstations();
```

- *Type:* java.lang.Number

Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#max_usable_workstations WorkstationsWorkstationConfigA#max_usable_workstations}

---

##### `persistentDirectories`<sup>Optional</sup> <a name="persistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigPersistentDirectories> getPersistentDirectories();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>>

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#persistent_directories WorkstationsWorkstationConfigA#persistent_directories}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}.

---

##### `readinessChecks`<sup>Optional</sup> <a name="readinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigReadinessChecks> getReadinessChecks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>>

readiness_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#readiness_checks WorkstationsWorkstationConfigA#readiness_checks}

---

##### `replicaZones`<sup>Optional</sup> <a name="replicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones"></a>

```java
public java.util.List<java.lang.String> getReplicaZones();
```

- *Type:* java.util.List<java.lang.String>

Specifies the zones used to replicate the VM and disk resources within the region.

If set, exactly two zones within the workstation cluster's region must be specified—for example, '['us-central1-a', 'us-central1-f']'.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#replica_zones WorkstationsWorkstationConfigA#replica_zones}

---

##### `runningTimeout`<sup>Optional</sup> <a name="runningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout"></a>

```java
public java.lang.String getRunningTimeout();
```

- *Type:* java.lang.String

How long to wait before automatically stopping a workstation after it was started.

A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if 'encryption_key' is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#running_timeout WorkstationsWorkstationConfigA#running_timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts"></a>

```java
public WorkstationsWorkstationConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#timeouts WorkstationsWorkstationConfigA#timeouts}

---

### WorkstationsWorkstationConfigAllowedPorts <a name="WorkstationsWorkstationConfigAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigAllowedPorts;

WorkstationsWorkstationConfigAllowedPorts.builder()
//  .first(java.lang.Number)
//  .last(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first">first</a></code> | <code>java.lang.Number</code> | Starting port number for the current range of ports. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last">last</a></code> | <code>java.lang.Number</code> | Ending port number for the current range of ports. |

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

Starting port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#first WorkstationsWorkstationConfigA#first}

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

Ending port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#last WorkstationsWorkstationConfigA#last}

---

### WorkstationsWorkstationConfigConditions <a name="WorkstationsWorkstationConfigConditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigConditions;

WorkstationsWorkstationConfigConditions.builder()
    .build();
```


### WorkstationsWorkstationConfigContainer <a name="WorkstationsWorkstationConfigContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigContainer;

WorkstationsWorkstationConfigContainer.builder()
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .env(java.util.Map<java.lang.String, java.lang.String>)
//  .image(java.lang.String)
//  .runAsUser(java.lang.Number)
//  .workingDir(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Arguments passed to the entrypoint. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | If set, overrides the default ENTRYPOINT specified by the image. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables passed to the container. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image">image</a></code> | <code>java.lang.String</code> | Docker image defining the container. This image must be accessible by the config's service account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser">runAsUser</a></code> | <code>java.lang.Number</code> | If set, overrides the USER specified in the image with the given uid. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | If set, overrides the default DIR specified by the image. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#args WorkstationsWorkstationConfigA#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#command WorkstationsWorkstationConfigA#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#env WorkstationsWorkstationConfigA#env}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#image WorkstationsWorkstationConfigA#image}

---

##### `runAsUser`<sup>Optional</sup> <a name="runAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser"></a>

```java
public java.lang.Number getRunAsUser();
```

- *Type:* java.lang.Number

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#run_as_user WorkstationsWorkstationConfigA#run_as_user}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#working_dir WorkstationsWorkstationConfigA#working_dir}

---

### WorkstationsWorkstationConfigEncryptionKey <a name="WorkstationsWorkstationConfigEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigEncryptionKey;

WorkstationsWorkstationConfigEncryptionKey.builder()
    .kmsKey(java.lang.String)
    .kmsKeyServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The name of the Google Cloud KMS encryption key. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account to use with the specified KMS key. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#kms_key WorkstationsWorkstationConfigA#kms_key}

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#kms_key_service_account WorkstationsWorkstationConfigA#kms_key_service_account}

---

### WorkstationsWorkstationConfigEphemeralDirectories <a name="WorkstationsWorkstationConfigEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigEphemeralDirectories;

WorkstationsWorkstationConfigEphemeralDirectories.builder()
//  .gcePd(WorkstationsWorkstationConfigEphemeralDirectoriesGcePd)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd">gcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Location of this directory in the running workstation. |

---

##### `gcePd`<sup>Optional</sup> <a name="gcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd"></a>

```java
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePd getGcePd();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigEphemeralDirectoriesGcePd <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd;

WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.builder()
//  .diskType(java.lang.String)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .sourceImage(java.lang.String)
//  .sourceSnapshot(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Type of the disk to use. Defaults to '"pd-standard"'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the disk is read only. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | Name of the disk image to use as the source for the disk. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | Name of the snapshot to use as the source for the disk. |

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Type of the disk to use. Defaults to '"pd-standard"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the disk is read only.

If true, the disk may be shared by multiple VMs and 'sourceSnapshot' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#read_only WorkstationsWorkstationConfigA#read_only}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

Name of the disk image to use as the source for the disk.

Must be empty 'sourceSnapshot' is set.
Updating 'sourceImage' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#source_image WorkstationsWorkstationConfigA#source_image}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

Name of the snapshot to use as the source for the disk.

Must be empty if 'sourceImage' is set.
Must be empty if 'read_only' is false.
Updating 'source_snapshot' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigHost <a name="WorkstationsWorkstationConfigHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHost;

WorkstationsWorkstationConfigHost.builder()
//  .gceInstance(WorkstationsWorkstationConfigHostGceInstance)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance">gceInstance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | gce_instance block. |

---

##### `gceInstance`<sup>Optional</sup> <a name="gceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance"></a>

```java
public WorkstationsWorkstationConfigHostGceInstance getGceInstance();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#gce_instance WorkstationsWorkstationConfigA#gce_instance}

---

### WorkstationsWorkstationConfigHostGceInstance <a name="WorkstationsWorkstationConfigHostGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstance;

WorkstationsWorkstationConfigHostGceInstance.builder()
//  .accelerators(IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceAccelerators>)
//  .boostConfigs(IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigs>)
//  .bootDiskSizeGb(java.lang.Number)
//  .confidentialInstanceConfig(WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig)
//  .disablePublicIpAddresses(java.lang.Boolean|IResolvable)
//  .disableSsh(java.lang.Boolean|IResolvable)
//  .enableNestedVirtualization(java.lang.Boolean|IResolvable)
//  .machineType(java.lang.String)
//  .poolSize(java.lang.Number)
//  .serviceAccount(java.lang.String)
//  .serviceAccountScopes(java.util.List<java.lang.String>)
//  .shieldedInstanceConfig(WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .vmTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators">accelerators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs">boostConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>></code> | boost_configs block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the boot disk in GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses">disablePublicIpAddresses</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether instances have no public IP address. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh">disableSsh</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable SSH access to the VM. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | Number of instances to pool for faster workstation startup. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Email address of the service account that will be used on VM instances used to support this config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>java.util.List<java.lang.String></code> | Scopes to grant to the service_account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Network tags to add to the Compute Engine machines backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags">vmTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the VM instances backing the Workstations. |

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceAccelerators> getAccelerators();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `boostConfigs`<sup>Optional</sup> <a name="boostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigs> getBoostConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>>

boost_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#boost_configs WorkstationsWorkstationConfigA#boost_configs}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#confidential_instance_config WorkstationsWorkstationConfigA#confidential_instance_config}

---

##### `disablePublicIpAddresses`<sup>Optional</sup> <a name="disablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses"></a>

```java
public java.lang.Boolean|IResolvable getDisablePublicIpAddresses();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#disable_public_ip_addresses WorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

##### `disableSsh`<sup>Optional</sup> <a name="disableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh"></a>

```java
public java.lang.Boolean|IResolvable getDisableSsh();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable SSH access to the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#disable_ssh WorkstationsWorkstationConfigA#disable_ssh}

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization"></a>

```java
public java.lang.Boolean|IResolvable getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `poolSize`<sup>Optional</sup> <a name="poolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#service_account WorkstationsWorkstationConfigA#service_account}

---

##### `serviceAccountScopes`<sup>Optional</sup> <a name="serviceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopes();
```

- *Type:* java.util.List<java.lang.String>

Scopes to grant to the service_account.

Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have 'iam.serviceAccounts.actAs' on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#service_account_scopes WorkstationsWorkstationConfigA#service_account_scopes}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#shielded_instance_config WorkstationsWorkstationConfigA#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#tags WorkstationsWorkstationConfigA#tags}

---

##### `vmTags`<sup>Optional</sup> <a name="vmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVmTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the VM instances backing the Workstations.

Tag keys and values have the same definition as
https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview
Keys must be in the format 'tagKeys/{tag_key_id}', and
values are in the format 'tagValues/456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#vm_tags WorkstationsWorkstationConfigA#vm_tags}

---

### WorkstationsWorkstationConfigHostGceInstanceAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceAccelerators;

WorkstationsWorkstationConfigHostGceInstanceAccelerators.builder()
    .count(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count">count</a></code> | <code>java.lang.Number</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type">type</a></code> | <code>java.lang.String</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigs <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs;

WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.builder()
    .id(java.lang.String)
//  .accelerators(IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators>)
//  .bootDiskSizeGb(java.lang.Number)
//  .enableNestedVirtualization(java.lang.Boolean|IResolvable)
//  .machineType(java.lang.String)
//  .poolSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id">id</a></code> | <code>java.lang.String</code> | The id to be used for the boost config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators">accelerators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The type of machine that boosted VM instances will use—for example, e2-standard-4. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | Number of instances to pool for faster workstation boosting. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The id to be used for the boost config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators> getAccelerators();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization"></a>

```java
public java.lang.Boolean|IResolvable getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The type of machine that boosted VM instances will use—for example, e2-standard-4.

For more information about machine types that Cloud Workstations supports, see the list of available machine types https://cloud.google.com/workstations/docs/available-machine-types. Defaults to e2-standard-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `poolSize`<sup>Optional</sup> <a name="poolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

Number of instances to pool for faster workstation boosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators;

WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.builder()
    .count(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count">count</a></code> | <code>java.lang.Number</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type">type</a></code> | <code>java.lang.String</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig;

WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.builder()
//  .enableConfidentialCompute(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the instance has confidential compute enabled. |

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```java
public java.lang.Boolean|IResolvable getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_confidential_compute WorkstationsWorkstationConfigA#enable_confidential_compute}

---

### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig;

WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean|IResolvable)
//  .enableSecureBoot(java.lang.Boolean|IResolvable)
//  .enableVtpm(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the instance has the vTPM enabled. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_integrity_monitoring WorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecureBoot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_secure_boot WorkstationsWorkstationConfigA#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Boolean|IResolvable getEnableVtpm();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#enable_vtpm WorkstationsWorkstationConfigA#enable_vtpm}

---

### WorkstationsWorkstationConfigPersistentDirectories <a name="WorkstationsWorkstationConfigPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigPersistentDirectories;

WorkstationsWorkstationConfigPersistentDirectories.builder()
//  .gceHd(WorkstationsWorkstationConfigPersistentDirectoriesGceHd)
//  .gcePd(WorkstationsWorkstationConfigPersistentDirectoriesGcePd)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd">gceHd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | gce_hd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd">gcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Location of this directory in the running workstation. |

---

##### `gceHd`<sup>Optional</sup> <a name="gceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGceHd getGceHd();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

gce_hd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#gce_hd WorkstationsWorkstationConfigA#gce_hd}

---

##### `gcePd`<sup>Optional</sup> <a name="gcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGcePd getGcePd();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGceHd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigPersistentDirectoriesGceHd;

WorkstationsWorkstationConfigPersistentDirectoriesGceHd.builder()
//  .archiveTimeout(java.lang.String)
//  .reclaimPolicy(java.lang.String)
//  .sizeGb(java.lang.Number)
//  .sourceSnapshot(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout">archiveTimeout</a></code> | <code>java.lang.String</code> | How long to wait before converting the disk into a snapshot. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"]. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | The GB capacity of a persistent home directory. Defaults to '200'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | Name of the snapshot to use as the source for the disk. |

---

##### `archiveTimeout`<sup>Optional</sup> <a name="archiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout"></a>

```java
public java.lang.String getArchiveTimeout();
```

- *Type:* java.lang.String

How long to wait before converting the disk into a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#archive_timeout WorkstationsWorkstationConfigA#archive_timeout}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `sizeGb`<sup>Optional</sup> <a name="sizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

The GB capacity of a persistent home directory. Defaults to '200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

Name of the snapshot to use as the source for the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGcePd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigPersistentDirectoriesGcePd;

WorkstationsWorkstationConfigPersistentDirectoriesGcePd.builder()
//  .diskType(java.lang.String)
//  .fsType(java.lang.String)
//  .reclaimPolicy(java.lang.String)
//  .sizeGb(java.lang.Number)
//  .sourceSnapshot(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType">diskType</a></code> | <code>java.lang.String</code> | The type of the persistent disk for the home directory. Defaults to 'pd-standard'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Type of file system that the disk should be formatted with. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | Whether the persistent disk should be deleted when the workstation is deleted. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | The GB capacity of a persistent home directory for each workstation created with this configuration. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | Name of the snapshot to use as the source for the disk. |

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

The type of the persistent disk for the home directory. Defaults to 'pd-standard'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if 'sourceSnapshot' is set. Defaults to 'ext4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#fs_type WorkstationsWorkstationConfigA#fs_type}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

Whether the persistent disk should be deleted when the workstation is deleted.

Valid values are 'DELETE' and 'RETAIN'. Defaults to 'DELETE'. Possible values: ["DELETE", "RETAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `sizeGb`<sup>Optional</sup> <a name="sizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

The GB capacity of a persistent home directory for each workstation created with this configuration.

Must be empty if 'sourceSnapshot' is set.
Valid values are '10', '50', '100', '200', '500', or '1000'. Defaults to '200'. If less than '200' GB, the 'diskType' must be 'pd-balanced' or 'pd-ssd'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

Name of the snapshot to use as the source for the disk.

This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, 'sizeGb' and 'fsType' must be empty. Can only be updated if it has an existing value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigReadinessChecks <a name="WorkstationsWorkstationConfigReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigReadinessChecks;

WorkstationsWorkstationConfigReadinessChecks.builder()
    .path(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path">path</a></code> | <code>java.lang.String</code> | Path to which the request should be sent. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port">port</a></code> | <code>java.lang.Number</code> | Port to which the request should be sent. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#path WorkstationsWorkstationConfigA#path}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#port WorkstationsWorkstationConfigA#port}

---

### WorkstationsWorkstationConfigTimeouts <a name="WorkstationsWorkstationConfigTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigTimeouts;

WorkstationsWorkstationConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationConfigAllowedPortsList <a name="WorkstationsWorkstationConfigAllowedPortsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigAllowedPortsList;

new WorkstationsWorkstationConfigAllowedPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get"></a>

```java
public WorkstationsWorkstationConfigAllowedPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigAllowedPorts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>>

---


### WorkstationsWorkstationConfigAllowedPortsOutputReference <a name="WorkstationsWorkstationConfigAllowedPortsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigAllowedPortsOutputReference;

new WorkstationsWorkstationConfigAllowedPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast">resetLast</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast"></a>

```java
public void resetLast()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput">lastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last">last</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput"></a>

```java
public java.lang.Number getLastInput();
```

- *Type:* java.lang.Number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last"></a>

```java
public java.lang.Number getLast();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigAllowedPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>

---


### WorkstationsWorkstationConfigConditionsList <a name="WorkstationsWorkstationConfigConditionsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigConditionsList;

new WorkstationsWorkstationConfigConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get"></a>

```java
public WorkstationsWorkstationConfigConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WorkstationsWorkstationConfigConditionsOutputReference <a name="WorkstationsWorkstationConfigConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigConditionsOutputReference;

new WorkstationsWorkstationConfigConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details">details</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a>

---


### WorkstationsWorkstationConfigContainerOutputReference <a name="WorkstationsWorkstationConfigContainerOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigContainerOutputReference;

new WorkstationsWorkstationConfigContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser">resetRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetRunAsUser` <a name="resetRunAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser"></a>

```java
public void resetRunAsUser()
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir"></a>

```java
public void resetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput">envInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput">runAsUserInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser">runAsUser</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput"></a>

```java
public java.lang.Number getRunAsUserInput();
```

- *Type:* java.lang.Number

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput"></a>

```java
public java.lang.String getWorkingDirInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser"></a>

```java
public java.lang.Number getRunAsUser();
```

- *Type:* java.lang.Number

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigContainer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---


### WorkstationsWorkstationConfigEncryptionKeyOutputReference <a name="WorkstationsWorkstationConfigEncryptionKeyOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigEncryptionKeyOutputReference;

new WorkstationsWorkstationConfigEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference;

new WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskType` <a name="resetDiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage"></a>

```java
public void resetSourceImage()
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```java
public void resetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput"></a>

```java
public java.lang.String getSourceImageInput();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```java
public java.lang.String getSourceSnapshotInput();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePd getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesList <a name="WorkstationsWorkstationConfigEphemeralDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigEphemeralDirectoriesList;

new WorkstationsWorkstationConfigEphemeralDirectoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get"></a>

```java
public WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigEphemeralDirectories> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference;

new WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd">putGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd">resetGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcePd` <a name="putGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd"></a>

```java
public void putGcePd(WorkstationsWorkstationConfigEphemeralDirectoriesGcePd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---

##### `resetGcePd` <a name="resetGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd"></a>

```java
public void resetGcePd()
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd">gcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput">gcePdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcePd`<sup>Required</sup> <a name="gcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd"></a>

```java
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference getGcePd();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a>

---

##### `gcePdInput`<sup>Optional</sup> <a name="gcePdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput"></a>

```java
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePd getGcePdInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigEphemeralDirectories getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList;

new WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceAccelerators> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>>

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference;

new WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceAccelerators getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize">resetPoolSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccelerators` <a name="putAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators"></a>

```java
public void putAccelerators(IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization"></a>

```java
public void resetEnableNestedVirtualization()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetPoolSize` <a name="resetPoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize"></a>

```java
public void resetPoolSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput">acceleratorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput">poolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators> getAcceleratorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableNestedVirtualizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `poolSizeInput`<sup>Optional</sup> <a name="poolSizeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput"></a>

```java
public java.lang.Number getPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization"></a>

```java
public java.lang.Boolean|IResolvable getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>

---


### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference;

new WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```java
public void resetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableConfidentialComputeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```java
public java.lang.Boolean|IResolvable getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostGceInstanceOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceOutputReference;

new WorkstationsWorkstationConfigHostGceInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs">putBoostConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs">resetBoostConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses">resetDisablePublicIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh">resetDisableSsh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize">resetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes">resetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags">resetVmTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccelerators` <a name="putAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators"></a>

```java
public void putAccelerators(IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>>

---

##### `putBoostConfigs` <a name="putBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs"></a>

```java
public void putBoostConfigs(IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>>

---

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig"></a>

```java
public void putConfidentialInstanceConfig(WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetBoostConfigs` <a name="resetBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs"></a>

```java
public void resetBoostConfigs()
```

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig"></a>

```java
public void resetConfidentialInstanceConfig()
```

##### `resetDisablePublicIpAddresses` <a name="resetDisablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses"></a>

```java
public void resetDisablePublicIpAddresses()
```

##### `resetDisableSsh` <a name="resetDisableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh"></a>

```java
public void resetDisableSsh()
```

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization"></a>

```java
public void resetEnableNestedVirtualization()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetPoolSize` <a name="resetPoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize"></a>

```java
public void resetPoolSize()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetServiceAccountScopes` <a name="resetServiceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes"></a>

```java
public void resetServiceAccountScopes()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVmTags` <a name="resetVmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags"></a>

```java
public void resetVmTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs">boostConfigs</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput">acceleratorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput">boostConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput">disablePublicIpAddressesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput">disableSshInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput">poolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput">serviceAccountScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput">vmTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses">disablePublicIpAddresses</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh">disableSsh</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags">vmTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a>

---

##### `boostConfigs`<sup>Required</sup> <a name="boostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList getBoostConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a>

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceAccelerators> getAcceleratorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>>

---

##### `boostConfigsInput`<sup>Optional</sup> <a name="boostConfigsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigHostGceInstanceBoostConfigs> getBoostConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig getConfidentialInstanceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `disablePublicIpAddressesInput`<sup>Optional</sup> <a name="disablePublicIpAddressesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePublicIpAddressesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableSshInput`<sup>Optional</sup> <a name="disableSshInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableSshInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableNestedVirtualizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `poolSizeInput`<sup>Optional</sup> <a name="poolSizeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput"></a>

```java
public java.lang.Number getPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountScopesInput`<sup>Optional</sup> <a name="serviceAccountScopesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vmTagsInput`<sup>Optional</sup> <a name="vmTagsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVmTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `disablePublicIpAddresses`<sup>Required</sup> <a name="disablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses"></a>

```java
public java.lang.Boolean|IResolvable getDisablePublicIpAddresses();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableSsh`<sup>Required</sup> <a name="disableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh"></a>

```java
public java.lang.Boolean|IResolvable getDisableSsh();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization"></a>

```java
public java.lang.Boolean|IResolvable getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `serviceAccountScopes`<sup>Required</sup> <a name="serviceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vmTags`<sup>Required</sup> <a name="vmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVmTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigHostGceInstance getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---


### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference;

new WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableVtpmInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecureBoot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Boolean|IResolvable getEnableVtpm();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostOutputReference <a name="WorkstationsWorkstationConfigHostOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigHostOutputReference;

new WorkstationsWorkstationConfigHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance">putGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance">resetGceInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGceInstance` <a name="putGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance"></a>

```java
public void putGceInstance(WorkstationsWorkstationConfigHostGceInstance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---

##### `resetGceInstance` <a name="resetGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance"></a>

```java
public void resetGceInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance">gceInstance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput">gceInstanceInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gceInstance`<sup>Required</sup> <a name="gceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance"></a>

```java
public WorkstationsWorkstationConfigHostGceInstanceOutputReference getGceInstance();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a>

---

##### `gceInstanceInput`<sup>Optional</sup> <a name="gceInstanceInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput"></a>

```java
public WorkstationsWorkstationConfigHostGceInstance getGceInstanceInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigHost getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference;

new WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout">resetArchiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy">resetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb">resetSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveTimeout` <a name="resetArchiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout"></a>

```java
public void resetArchiveTimeout()
```

##### `resetReclaimPolicy` <a name="resetReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy"></a>

```java
public void resetReclaimPolicy()
```

##### `resetSizeGb` <a name="resetSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb"></a>

```java
public void resetSizeGb()
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot"></a>

```java
public void resetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput">archiveTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput">reclaimPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout">archiveTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveTimeoutInput`<sup>Optional</sup> <a name="archiveTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput"></a>

```java
public java.lang.String getArchiveTimeoutInput();
```

- *Type:* java.lang.String

---

##### `reclaimPolicyInput`<sup>Optional</sup> <a name="reclaimPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput"></a>

```java
public java.lang.String getReclaimPolicyInput();
```

- *Type:* java.lang.String

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput"></a>

```java
public java.lang.Number getSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput"></a>

```java
public java.lang.String getSourceSnapshotInput();
```

- *Type:* java.lang.String

---

##### `archiveTimeout`<sup>Required</sup> <a name="archiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout"></a>

```java
public java.lang.String getArchiveTimeout();
```

- *Type:* java.lang.String

---

##### `reclaimPolicy`<sup>Required</sup> <a name="reclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGceHd getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference;

new WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy">resetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb">resetSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskType` <a name="resetDiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetFsType` <a name="resetFsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetReclaimPolicy` <a name="resetReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy"></a>

```java
public void resetReclaimPolicy()
```

##### `resetSizeGb` <a name="resetSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb"></a>

```java
public void resetSizeGb()
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```java
public void resetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput">reclaimPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `reclaimPolicyInput`<sup>Optional</sup> <a name="reclaimPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput"></a>

```java
public java.lang.String getReclaimPolicyInput();
```

- *Type:* java.lang.String

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput"></a>

```java
public java.lang.Number getSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```java
public java.lang.String getSourceSnapshotInput();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `reclaimPolicy`<sup>Required</sup> <a name="reclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGcePd getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesList <a name="WorkstationsWorkstationConfigPersistentDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigPersistentDirectoriesList;

new WorkstationsWorkstationConfigPersistentDirectoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigPersistentDirectories> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>>

---


### WorkstationsWorkstationConfigPersistentDirectoriesOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference;

new WorkstationsWorkstationConfigPersistentDirectoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd">putGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd">putGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd">resetGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd">resetGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGceHd` <a name="putGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd"></a>

```java
public void putGceHd(WorkstationsWorkstationConfigPersistentDirectoriesGceHd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---

##### `putGcePd` <a name="putGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd"></a>

```java
public void putGcePd(WorkstationsWorkstationConfigPersistentDirectoriesGcePd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `resetGceHd` <a name="resetGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd"></a>

```java
public void resetGceHd()
```

##### `resetGcePd` <a name="resetGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd"></a>

```java
public void resetGcePd()
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd">gceHd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd">gcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput">gceHdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput">gcePdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gceHd`<sup>Required</sup> <a name="gceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference getGceHd();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a>

---

##### `gcePd`<sup>Required</sup> <a name="gcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference getGcePd();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a>

---

##### `gceHdInput`<sup>Optional</sup> <a name="gceHdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGceHd getGceHdInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---

##### `gcePdInput`<sup>Optional</sup> <a name="gcePdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput"></a>

```java
public WorkstationsWorkstationConfigPersistentDirectoriesGcePd getGcePdInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigPersistentDirectories getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>

---


### WorkstationsWorkstationConfigReadinessChecksList <a name="WorkstationsWorkstationConfigReadinessChecksList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigReadinessChecksList;

new WorkstationsWorkstationConfigReadinessChecksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get"></a>

```java
public WorkstationsWorkstationConfigReadinessChecksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkstationsWorkstationConfigReadinessChecks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>>

---


### WorkstationsWorkstationConfigReadinessChecksOutputReference <a name="WorkstationsWorkstationConfigReadinessChecksOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigReadinessChecksOutputReference;

new WorkstationsWorkstationConfigReadinessChecksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigReadinessChecks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>

---


### WorkstationsWorkstationConfigTimeoutsOutputReference <a name="WorkstationsWorkstationConfigTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_config.WorkstationsWorkstationConfigTimeoutsOutputReference;

new WorkstationsWorkstationConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---



