# `gkeHubRolloutSequence` Submodule <a name="`gkeHubRolloutSequence` Submodule" id="@cdktn/provider-google.gkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubRolloutSequence <a name="GkeHubRolloutSequence" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequence;

GkeHubRolloutSequence.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rolloutSequenceId(java.lang.String)
    .stages(IResolvable|java.util.List<GkeHubRolloutSequenceStages>)
//  .autoUpgradeConfig(GkeHubRolloutSequenceAutoUpgradeConfig)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ignoredClustersSelector(GkeHubRolloutSequenceIgnoredClustersSelector)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GkeHubRolloutSequenceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId">rolloutSequenceId</a></code> | <code>java.lang.String</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>></code> | stages block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId"></a>

- *Type:* java.lang.String

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#rollout_sequence_id GkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.stages"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#stages GkeHubRolloutSequence#stages}

---

##### `autoUpgradeConfig`<sup>Optional</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#auto_upgrade_config GkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#deletion_policy GkeHubRolloutSequence#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#display_name GkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredClustersSelector`<sup>Optional</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#ignored_clusters_selector GkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#labels GkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#timeouts GkeHubRolloutSequence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig">putAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector">putIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig">resetAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector">resetIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoUpgradeConfig` <a name="putAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```java
public void putAutoUpgradeConfig(GkeHubRolloutSequenceAutoUpgradeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `putIgnoredClustersSelector` <a name="putIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```java
public void putIgnoredClustersSelector(GkeHubRolloutSequenceIgnoredClustersSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `putStages` <a name="putStages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages"></a>

```java
public void putStages(IResolvable|java.util.List<GkeHubRolloutSequenceStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts"></a>

```java
public void putTimeouts(GkeHubRolloutSequenceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---

##### `resetAutoUpgradeConfig` <a name="resetAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```java
public void resetAutoUpgradeConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoredClustersSelector` <a name="resetIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```java
public void resetIgnoredClustersSelector()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequence;

GkeHubRolloutSequence.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequence;

GkeHubRolloutSequence.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequence;

GkeHubRolloutSequence.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequence;

GkeHubRolloutSequence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GkeHubRolloutSequence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GkeHubRolloutSequence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput">autoUpgradeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput">ignoredClustersSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput">rolloutSequenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput">stagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoUpgradeConfig`<sup>Required</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfigOutputReference getAutoUpgradeConfig();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `ignoredClustersSelector`<sup>Required</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```java
public GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference getIgnoredClustersSelector();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages"></a>

```java
public GkeHubRolloutSequenceStagesList getStages();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts"></a>

```java
public GkeHubRolloutSequenceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `autoUpgradeConfigInput`<sup>Optional</sup> <a name="autoUpgradeConfigInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfig getAutoUpgradeConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoredClustersSelectorInput`<sup>Optional</sup> <a name="ignoredClustersSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```java
public GkeHubRolloutSequenceIgnoredClustersSelector getIgnoredClustersSelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rolloutSequenceIdInput`<sup>Optional</sup> <a name="rolloutSequenceIdInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```java
public java.lang.String getRolloutSequenceIdInput();
```

- *Type:* java.lang.String

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput"></a>

```java
public IResolvable|java.util.List<GkeHubRolloutSequenceStages> getStagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput"></a>

```java
public IResolvable|GkeHubRolloutSequenceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId"></a>

```java
public java.lang.String getRolloutSequenceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubRolloutSequenceAutoUpgradeConfig <a name="GkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceAutoUpgradeConfig;

GkeHubRolloutSequenceAutoUpgradeConfig.builder()
//  .rolloutCreationScope(GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `rolloutCreationScope`<sup>Optional</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope getRolloutCreationScope();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#rollout_creation_scope GkeHubRolloutSequence#rollout_creation_scope}

---

### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;

GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.builder()
//  .upgradeTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">upgradeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `upgradeTypes`<sup>Optional</sup> <a name="upgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```java
public java.util.List<java.lang.String> getUpgradeTypes();
```

- *Type:* java.util.List<java.lang.String>

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#upgrade_types GkeHubRolloutSequence#upgrade_types}

---

### GkeHubRolloutSequenceConfig <a name="GkeHubRolloutSequenceConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceConfig;

GkeHubRolloutSequenceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rolloutSequenceId(java.lang.String)
    .stages(IResolvable|java.util.List<GkeHubRolloutSequenceStages>)
//  .autoUpgradeConfig(GkeHubRolloutSequenceAutoUpgradeConfig)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ignoredClustersSelector(GkeHubRolloutSequenceIgnoredClustersSelector)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GkeHubRolloutSequenceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>java.lang.String</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>></code> | stages block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```java
public java.lang.String getRolloutSequenceId();
```

- *Type:* java.lang.String

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#rollout_sequence_id GkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages"></a>

```java
public IResolvable|java.util.List<GkeHubRolloutSequenceStages> getStages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#stages GkeHubRolloutSequence#stages}

---

##### `autoUpgradeConfig`<sup>Optional</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfig getAutoUpgradeConfig();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#auto_upgrade_config GkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#deletion_policy GkeHubRolloutSequence#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#display_name GkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredClustersSelector`<sup>Optional</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```java
public GkeHubRolloutSequenceIgnoredClustersSelector getIgnoredClustersSelector();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#ignored_clusters_selector GkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#labels GkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts"></a>

```java
public GkeHubRolloutSequenceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#timeouts GkeHubRolloutSequence#timeouts}

---

### GkeHubRolloutSequenceIgnoredClustersSelector <a name="GkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceIgnoredClustersSelector;

GkeHubRolloutSequenceIgnoredClustersSelector.builder()
    .labelSelector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceStages <a name="GkeHubRolloutSequenceStages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceStages;

GkeHubRolloutSequenceStages.builder()
    .fleetProjects(java.util.List<java.lang.String>)
//  .clusterSelector(GkeHubRolloutSequenceStagesClusterSelector)
//  .soakDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects">fleetProjects</a></code> | <code>java.util.List<java.lang.String></code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration">soakDuration</a></code> | <code>java.lang.String</code> | Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days. |

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects"></a>

```java
public java.util.List<java.lang.String> getFleetProjects();
```

- *Type:* java.util.List<java.lang.String>

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#fleet_projects GkeHubRolloutSequence#fleet_projects}

---

##### `clusterSelector`<sup>Optional</sup> <a name="clusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector"></a>

```java
public GkeHubRolloutSequenceStagesClusterSelector getClusterSelector();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#cluster_selector GkeHubRolloutSequence#cluster_selector}

---

##### `soakDuration`<sup>Optional</sup> <a name="soakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration"></a>

```java
public java.lang.String getSoakDuration();
```

- *Type:* java.lang.String

Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#soak_duration GkeHubRolloutSequence#soak_duration}

---

### GkeHubRolloutSequenceStagesClusterSelector <a name="GkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceStagesClusterSelector;

GkeHubRolloutSequenceStagesClusterSelector.builder()
    .labelSelector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceTimeouts <a name="GkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceTimeouts;

GkeHubRolloutSequenceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference;

new GkeHubRolloutSequenceAutoUpgradeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">putRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">resetRolloutCreationScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRolloutCreationScope` <a name="putRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```java
public void putRolloutCreationScope(GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `resetRolloutCreationScope` <a name="resetRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```java
public void resetRolloutCreationScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">rolloutCreationScopeInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rolloutCreationScope`<sup>Required</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference getRolloutCreationScope();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `rolloutCreationScopeInput`<sup>Optional</sup> <a name="rolloutCreationScopeInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope getRolloutCreationScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference;

new GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">resetUpgradeTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpgradeTypes` <a name="resetUpgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```java
public void resetUpgradeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">upgradeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">upgradeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `upgradeTypesInput`<sup>Optional</sup> <a name="upgradeTypesInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```java
public java.util.List<java.lang.String> getUpgradeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `upgradeTypes`<sup>Required</sup> <a name="upgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```java
public java.util.List<java.lang.String> getUpgradeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```java
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference;

new GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```java
public java.lang.String getLabelSelectorInput();
```

- *Type:* java.lang.String

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```java
public GkeHubRolloutSequenceIgnoredClustersSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference;

new GkeHubRolloutSequenceStagesClusterSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```java
public java.lang.String getLabelSelectorInput();
```

- *Type:* java.lang.String

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```java
public GkeHubRolloutSequenceStagesClusterSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---


### GkeHubRolloutSequenceStagesList <a name="GkeHubRolloutSequenceStagesList" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceStagesList;

new GkeHubRolloutSequenceStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get"></a>

```java
public GkeHubRolloutSequenceStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GkeHubRolloutSequenceStages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>>

---


### GkeHubRolloutSequenceStagesOutputReference <a name="GkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceStagesOutputReference;

new GkeHubRolloutSequenceStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector">putClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">resetClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">resetSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterSelector` <a name="putClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```java
public void putClusterSelector(GkeHubRolloutSequenceStagesClusterSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `resetClusterSelector` <a name="resetClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```java
public void resetClusterSelector()
```

##### `resetSoakDuration` <a name="resetSoakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```java
public void resetSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">clusterSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">fleetProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">soakDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">fleetProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration">soakDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterSelector`<sup>Required</sup> <a name="clusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```java
public GkeHubRolloutSequenceStagesClusterSelectorOutputReference getClusterSelector();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `clusterSelectorInput`<sup>Optional</sup> <a name="clusterSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```java
public GkeHubRolloutSequenceStagesClusterSelector getClusterSelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `fleetProjectsInput`<sup>Optional</sup> <a name="fleetProjectsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```java
public java.util.List<java.lang.String> getFleetProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `soakDurationInput`<sup>Optional</sup> <a name="soakDurationInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```java
public java.lang.String getSoakDurationInput();
```

- *Type:* java.lang.String

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```java
public java.util.List<java.lang.String> getFleetProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `soakDuration`<sup>Required</sup> <a name="soakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```java
public java.lang.String getSoakDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```java
public IResolvable|GkeHubRolloutSequenceStages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>

---


### GkeHubRolloutSequenceTimeoutsOutputReference <a name="GkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_rollout_sequence.GkeHubRolloutSequenceTimeoutsOutputReference;

new GkeHubRolloutSequenceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GkeHubRolloutSequenceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---



