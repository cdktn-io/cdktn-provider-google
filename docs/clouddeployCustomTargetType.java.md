# `clouddeployCustomTargetType` Submodule <a name="`clouddeployCustomTargetType` Submodule" id="@cdktn/provider-google.clouddeployCustomTargetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployCustomTargetType <a name="ClouddeployCustomTargetType" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type google_clouddeploy_custom_target_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetType;

ClouddeployCustomTargetType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .customActions(ClouddeployCustomTargetTypeCustomActions)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .tasks(ClouddeployCustomTargetTypeTasks)
//  .timeouts(ClouddeployCustomTargetTypeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the source. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the 'CustomTargetType'. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User annotations. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.customActions">customActions</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a></code> | custom_actions block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the 'CustomTargetType'. Max length is 255 characters. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#id ClouddeployCustomTargetType#id}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are attributes that can be set and used by both the user and by Cloud Deploy. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#project ClouddeployCustomTargetType#project}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a></code> | tasks block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#location ClouddeployCustomTargetType#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the 'CustomTargetType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#name ClouddeployCustomTargetType#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User annotations.

These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#annotations ClouddeployCustomTargetType#annotations}

---

##### `customActions`<sup>Optional</sup> <a name="customActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.customActions"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

custom_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#custom_actions ClouddeployCustomTargetType#custom_actions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#deletion_policy ClouddeployCustomTargetType#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the 'CustomTargetType'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#description ClouddeployCustomTargetType#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#id ClouddeployCustomTargetType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are attributes that can be set and used by both the user and by Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#labels ClouddeployCustomTargetType#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#project ClouddeployCustomTargetType#project}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.tasks"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#tasks ClouddeployCustomTargetType#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#timeouts ClouddeployCustomTargetType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putCustomActions">putCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetCustomActions">resetCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTasks">resetTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomActions` <a name="putCustomActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putCustomActions"></a>

```java
public void putCustomActions(ClouddeployCustomTargetTypeCustomActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putCustomActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

---

##### `putTasks` <a name="putTasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTasks"></a>

```java
public void putTasks(ClouddeployCustomTargetTypeTasks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTasks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTimeouts"></a>

```java
public void putTimeouts(ClouddeployCustomTargetTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCustomActions` <a name="resetCustomActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetCustomActions"></a>

```java
public void resetCustomActions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetProject"></a>

```java
public void resetProject()
```

##### `resetTasks` <a name="resetTasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTasks"></a>

```java
public void resetTasks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isConstruct"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetType;

ClouddeployCustomTargetType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformElement"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetType;

ClouddeployCustomTargetType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformResource"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetType;

ClouddeployCustomTargetType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetType;

ClouddeployCustomTargetType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ClouddeployCustomTargetType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ClouddeployCustomTargetType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ClouddeployCustomTargetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ClouddeployCustomTargetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActions">customActions</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference">ClouddeployCustomTargetTypeCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customTargetTypeId">customTargetTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference">ClouddeployCustomTargetTypeTasksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference">ClouddeployCustomTargetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActionsInput">customActionsInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasksInput">tasksInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customActions`<sup>Required</sup> <a name="customActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActions"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsOutputReference getCustomActions();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference">ClouddeployCustomTargetTypeCustomActionsOutputReference</a>

---

##### `customTargetTypeId`<sup>Required</sup> <a name="customTargetTypeId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customTargetTypeId"></a>

```java
public java.lang.String getCustomTargetTypeId();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasks"></a>

```java
public ClouddeployCustomTargetTypeTasksOutputReference getTasks();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference">ClouddeployCustomTargetTypeTasksOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeouts"></a>

```java
public ClouddeployCustomTargetTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference">ClouddeployCustomTargetTypeTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customActionsInput`<sup>Optional</sup> <a name="customActionsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActionsInput"></a>

```java
public ClouddeployCustomTargetTypeCustomActions getCustomActionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasksInput"></a>

```java
public ClouddeployCustomTargetTypeTasks getTasksInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeoutsInput"></a>

```java
public IResolvable|ClouddeployCustomTargetTypeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployCustomTargetTypeConfig <a name="ClouddeployCustomTargetTypeConfig" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeConfig;

ClouddeployCustomTargetTypeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .customActions(ClouddeployCustomTargetTypeCustomActions)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .tasks(ClouddeployCustomTargetTypeTasks)
//  .timeouts(ClouddeployCustomTargetTypeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the source. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the 'CustomTargetType'. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User annotations. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.customActions">customActions</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a></code> | custom_actions block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the 'CustomTargetType'. Max length is 255 characters. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#id ClouddeployCustomTargetType#id}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are attributes that can be set and used by both the user and by Cloud Deploy. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#project ClouddeployCustomTargetType#project}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a></code> | tasks block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#location ClouddeployCustomTargetType#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the 'CustomTargetType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#name ClouddeployCustomTargetType#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User annotations.

These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#annotations ClouddeployCustomTargetType#annotations}

---

##### `customActions`<sup>Optional</sup> <a name="customActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.customActions"></a>

```java
public ClouddeployCustomTargetTypeCustomActions getCustomActions();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

custom_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#custom_actions ClouddeployCustomTargetType#custom_actions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#deletion_policy ClouddeployCustomTargetType#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the 'CustomTargetType'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#description ClouddeployCustomTargetType#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#id ClouddeployCustomTargetType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are attributes that can be set and used by both the user and by Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#labels ClouddeployCustomTargetType#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#project ClouddeployCustomTargetType#project}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.tasks"></a>

```java
public ClouddeployCustomTargetTypeTasks getTasks();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#tasks ClouddeployCustomTargetType#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.timeouts"></a>

```java
public ClouddeployCustomTargetTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#timeouts ClouddeployCustomTargetType#timeouts}

---

### ClouddeployCustomTargetTypeCustomActions <a name="ClouddeployCustomTargetTypeCustomActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActions;

ClouddeployCustomTargetTypeCustomActions.builder()
    .deployAction(java.lang.String)
//  .includeSkaffoldModules(IResolvable|java.util.List<ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules>)
//  .renderAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.deployAction">deployAction</a></code> | <code>java.lang.String</code> | The Skaffold custom action responsible for deploy operations. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules">includeSkaffoldModules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>></code> | include_skaffold_modules block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.renderAction">renderAction</a></code> | <code>java.lang.String</code> | The Skaffold custom action responsible for render operations. |

---

##### `deployAction`<sup>Required</sup> <a name="deployAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.deployAction"></a>

```java
public java.lang.String getDeployAction();
```

- *Type:* java.lang.String

The Skaffold custom action responsible for deploy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#deploy_action ClouddeployCustomTargetType#deploy_action}

---

##### `includeSkaffoldModules`<sup>Optional</sup> <a name="includeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules"></a>

```java
public IResolvable|java.util.List<ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules> getIncludeSkaffoldModules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>>

include_skaffold_modules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#include_skaffold_modules ClouddeployCustomTargetType#include_skaffold_modules}

---

##### `renderAction`<sup>Optional</sup> <a name="renderAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.renderAction"></a>

```java
public java.lang.String getRenderAction();
```

- *Type:* java.lang.String

The Skaffold custom action responsible for render operations.

If not provided then Cloud Deploy will perform the render operations via 'skaffold render'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#render_action ClouddeployCustomTargetType#render_action}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules;

ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.builder()
//  .configs(java.util.List<java.lang.String>)
//  .git(ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit)
//  .googleCloudBuildRepo(ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo)
//  .googleCloudStorage(ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs">configs</a></code> | <code>java.util.List<java.lang.String></code> | The Skaffold Config modules to use from the specified source. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git">git</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | git block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo">googleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | google_cloud_build_repo block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage">googleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | google_cloud_storage block. |

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs"></a>

```java
public java.util.List<java.lang.String> getConfigs();
```

- *Type:* java.util.List<java.lang.String>

The Skaffold Config modules to use from the specified source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#configs ClouddeployCustomTargetType#configs}

---

##### `git`<sup>Optional</sup> <a name="git" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit getGit();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#git ClouddeployCustomTargetType#git}

---

##### `googleCloudBuildRepo`<sup>Optional</sup> <a name="googleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo getGoogleCloudBuildRepo();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

google_cloud_build_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#google_cloud_build_repo ClouddeployCustomTargetType#google_cloud_build_repo}

---

##### `googleCloudStorage`<sup>Optional</sup> <a name="googleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage getGoogleCloudStorage();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

google_cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#google_cloud_storage ClouddeployCustomTargetType#google_cloud_storage}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit;

ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.builder()
    .repo(java.lang.String)
//  .path(java.lang.String)
//  .ref(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo">repo</a></code> | <code>java.lang.String</code> | Git repository the package should be cloned from. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path">path</a></code> | <code>java.lang.String</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref">ref</a></code> | <code>java.lang.String</code> | Git ref the package should be cloned from. |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Git repository the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#repo ClouddeployCustomTargetType#repo}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

Git ref the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#ref ClouddeployCustomTargetType#ref}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo;

ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.builder()
    .repository(java.lang.String)
//  .path(java.lang.String)
//  .ref(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository">repository</a></code> | <code>java.lang.String</code> | Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path">path</a></code> | <code>java.lang.String</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref">ref</a></code> | <code>java.lang.String</code> | Branch or tag to use when cloning the repository. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#repository ClouddeployCustomTargetType#repository}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

Branch or tag to use when cloning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#ref ClouddeployCustomTargetType#ref}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage;

ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.builder()
    .source(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source">source</a></code> | <code>java.lang.String</code> | Cloud Storage source paths to copy recursively. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path">path</a></code> | <code>java.lang.String</code> | Relative path from the source to the Skaffold file. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Cloud Storage source paths to copy recursively.

For example, providing 'gs://my-bucket/dir/configs/*' will result in Skaffold copying all files within the 'dir/configs' directory in the bucket 'my-bucket'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#source ClouddeployCustomTargetType#source}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Relative path from the source to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}

---

### ClouddeployCustomTargetTypeTasks <a name="ClouddeployCustomTargetTypeTasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasks;

ClouddeployCustomTargetTypeTasks.builder()
    .deploy(ClouddeployCustomTargetTypeTasksDeploy)
//  .render(ClouddeployCustomTargetTypeTasksRender)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.deploy">deploy</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a></code> | deploy block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.render">render</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a></code> | render block. |

---

##### `deploy`<sup>Required</sup> <a name="deploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.deploy"></a>

```java
public ClouddeployCustomTargetTypeTasksDeploy getDeploy();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#deploy ClouddeployCustomTargetType#deploy}

---

##### `render`<sup>Optional</sup> <a name="render" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.render"></a>

```java
public ClouddeployCustomTargetTypeTasksRender getRender();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

render block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#render ClouddeployCustomTargetType#render}

---

### ClouddeployCustomTargetTypeTasksDeploy <a name="ClouddeployCustomTargetTypeTasksDeploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksDeploy;

ClouddeployCustomTargetTypeTasksDeploy.builder()
//  .container(ClouddeployCustomTargetTypeTasksDeployContainer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a></code> | container block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy.property.container"></a>

```java
public ClouddeployCustomTargetTypeTasksDeployContainer getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#container ClouddeployCustomTargetType#container}

---

### ClouddeployCustomTargetTypeTasksDeployContainer <a name="ClouddeployCustomTargetTypeTasksDeployContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksDeployContainer;

ClouddeployCustomTargetTypeTasksDeployContainer.builder()
    .image(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .env(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.image">image</a></code> | <code>java.lang.String</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables that are set in the container. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#image ClouddeployCustomTargetType#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#args ClouddeployCustomTargetType#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#command ClouddeployCustomTargetType#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#env ClouddeployCustomTargetType#env}

---

### ClouddeployCustomTargetTypeTasksRender <a name="ClouddeployCustomTargetTypeTasksRender" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksRender;

ClouddeployCustomTargetTypeTasksRender.builder()
//  .container(ClouddeployCustomTargetTypeTasksRenderContainer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a></code> | container block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender.property.container"></a>

```java
public ClouddeployCustomTargetTypeTasksRenderContainer getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#container ClouddeployCustomTargetType#container}

---

### ClouddeployCustomTargetTypeTasksRenderContainer <a name="ClouddeployCustomTargetTypeTasksRenderContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksRenderContainer;

ClouddeployCustomTargetTypeTasksRenderContainer.builder()
    .image(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .env(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.image">image</a></code> | <code>java.lang.String</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables that are set in the container. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#image ClouddeployCustomTargetType#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#args ClouddeployCustomTargetType#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#command ClouddeployCustomTargetType#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#env ClouddeployCustomTargetType#env}

---

### ClouddeployCustomTargetTypeTimeouts <a name="ClouddeployCustomTargetTypeTimeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTimeouts;

ClouddeployCustomTargetTypeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#create ClouddeployCustomTargetType#create}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#delete ClouddeployCustomTargetType#delete}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#update ClouddeployCustomTargetType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#create ClouddeployCustomTargetType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#delete ClouddeployCustomTargetType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_custom_target_type#update ClouddeployCustomTargetType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference;

new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef"></a>

```java
public void resetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference;

new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef"></a>

```java
public void resetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference;

new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList;

new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>>

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference;

new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit">putGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo">putGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage">putGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit">resetGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo">resetGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage">resetGoogleCloudStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGit` <a name="putGit" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit"></a>

```java
public void putGit(ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `putGoogleCloudBuildRepo` <a name="putGoogleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo"></a>

```java
public void putGoogleCloudBuildRepo(ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `putGoogleCloudStorage` <a name="putGoogleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage"></a>

```java
public void putGoogleCloudStorage(ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs"></a>

```java
public void resetConfigs()
```

##### `resetGit` <a name="resetGit" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit"></a>

```java
public void resetGit()
```

##### `resetGoogleCloudBuildRepo` <a name="resetGoogleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo"></a>

```java
public void resetGoogleCloudBuildRepo()
```

##### `resetGoogleCloudStorage` <a name="resetGoogleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage"></a>

```java
public void resetGoogleCloudStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git">git</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo">googleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage">googleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput">configsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput">gitInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput">googleCloudBuildRepoInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput">googleCloudStorageInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs">configs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference getGit();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a>

---

##### `googleCloudBuildRepo`<sup>Required</sup> <a name="googleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference getGoogleCloudBuildRepo();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a>

---

##### `googleCloudStorage`<sup>Required</sup> <a name="googleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference getGoogleCloudStorage();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a>

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput"></a>

```java
public java.util.List<java.lang.String> getConfigsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gitInput`<sup>Optional</sup> <a name="gitInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit getGitInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `googleCloudBuildRepoInput`<sup>Optional</sup> <a name="googleCloudBuildRepoInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo getGoogleCloudBuildRepoInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `googleCloudStorageInput`<sup>Optional</sup> <a name="googleCloudStorageInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage getGoogleCloudStorageInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs"></a>

```java
public java.util.List<java.lang.String> getConfigs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue"></a>

```java
public IResolvable|ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>

---


### ClouddeployCustomTargetTypeCustomActionsOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeCustomActionsOutputReference;

new ClouddeployCustomTargetTypeCustomActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules">putIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules">resetIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction">resetRenderAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeSkaffoldModules` <a name="putIncludeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules"></a>

```java
public void putIncludeSkaffoldModules(IResolvable|java.util.List<ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>>

---

##### `resetIncludeSkaffoldModules` <a name="resetIncludeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules"></a>

```java
public void resetIncludeSkaffoldModules()
```

##### `resetRenderAction` <a name="resetRenderAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction"></a>

```java
public void resetRenderAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules">includeSkaffoldModules</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput">deployActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput">includeSkaffoldModulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput">renderActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction">deployAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction">renderAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeSkaffoldModules`<sup>Required</sup> <a name="includeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules"></a>

```java
public ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList getIncludeSkaffoldModules();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a>

---

##### `deployActionInput`<sup>Optional</sup> <a name="deployActionInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput"></a>

```java
public java.lang.String getDeployActionInput();
```

- *Type:* java.lang.String

---

##### `includeSkaffoldModulesInput`<sup>Optional</sup> <a name="includeSkaffoldModulesInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput"></a>

```java
public IResolvable|java.util.List<ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules> getIncludeSkaffoldModulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>>

---

##### `renderActionInput`<sup>Optional</sup> <a name="renderActionInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput"></a>

```java
public java.lang.String getRenderActionInput();
```

- *Type:* java.lang.String

---

##### `deployAction`<sup>Required</sup> <a name="deployAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction"></a>

```java
public java.lang.String getDeployAction();
```

- *Type:* java.lang.String

---

##### `renderAction`<sup>Required</sup> <a name="renderAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction"></a>

```java
public java.lang.String getRenderAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeCustomActions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

---


### ClouddeployCustomTargetTypeTasksDeployContainerOutputReference <a name="ClouddeployCustomTargetTypeTasksDeployContainerOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference;

new ClouddeployCustomTargetTypeTasksDeployContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv"></a>

```java
public void resetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput">envInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeTasksDeployContainer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

---


### ClouddeployCustomTargetTypeTasksDeployOutputReference <a name="ClouddeployCustomTargetTypeTasksDeployOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksDeployOutputReference;

new ClouddeployCustomTargetTypeTasksDeployOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer">resetContainer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainer` <a name="putContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer"></a>

```java
public void putContainer(ClouddeployCustomTargetTypeTasksDeployContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer"></a>

```java
public void resetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference">ClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.container"></a>

```java
public ClouddeployCustomTargetTypeTasksDeployContainerOutputReference getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference">ClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput"></a>

```java
public ClouddeployCustomTargetTypeTasksDeployContainer getContainerInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeTasksDeploy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

---


### ClouddeployCustomTargetTypeTasksOutputReference <a name="ClouddeployCustomTargetTypeTasksOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksOutputReference;

new ClouddeployCustomTargetTypeTasksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putDeploy">putDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putRender">putRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resetRender">resetRender</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploy` <a name="putDeploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putDeploy"></a>

```java
public void putDeploy(ClouddeployCustomTargetTypeTasksDeploy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `putRender` <a name="putRender" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putRender"></a>

```java
public void putRender(ClouddeployCustomTargetTypeTasksRender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putRender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

---

##### `resetRender` <a name="resetRender" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resetRender"></a>

```java
public void resetRender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deploy">deploy</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference">ClouddeployCustomTargetTypeTasksDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.render">render</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference">ClouddeployCustomTargetTypeTasksRenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deployInput">deployInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.renderInput">renderInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploy`<sup>Required</sup> <a name="deploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deploy"></a>

```java
public ClouddeployCustomTargetTypeTasksDeployOutputReference getDeploy();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference">ClouddeployCustomTargetTypeTasksDeployOutputReference</a>

---

##### `render`<sup>Required</sup> <a name="render" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.render"></a>

```java
public ClouddeployCustomTargetTypeTasksRenderOutputReference getRender();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference">ClouddeployCustomTargetTypeTasksRenderOutputReference</a>

---

##### `deployInput`<sup>Optional</sup> <a name="deployInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deployInput"></a>

```java
public ClouddeployCustomTargetTypeTasksDeploy getDeployInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `renderInput`<sup>Optional</sup> <a name="renderInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.renderInput"></a>

```java
public ClouddeployCustomTargetTypeTasksRender getRenderInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeTasks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

---


### ClouddeployCustomTargetTypeTasksRenderContainerOutputReference <a name="ClouddeployCustomTargetTypeTasksRenderContainerOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference;

new ClouddeployCustomTargetTypeTasksRenderContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv"></a>

```java
public void resetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput">envInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeTasksRenderContainer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

---


### ClouddeployCustomTargetTypeTasksRenderOutputReference <a name="ClouddeployCustomTargetTypeTasksRenderOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTasksRenderOutputReference;

new ClouddeployCustomTargetTypeTasksRenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer">resetContainer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainer` <a name="putContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer"></a>

```java
public void putContainer(ClouddeployCustomTargetTypeTasksRenderContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer"></a>

```java
public void resetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference">ClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.container"></a>

```java
public ClouddeployCustomTargetTypeTasksRenderContainerOutputReference getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference">ClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput"></a>

```java
public ClouddeployCustomTargetTypeTasksRenderContainer getContainerInput();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue"></a>

```java
public ClouddeployCustomTargetTypeTasksRender getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

---


### ClouddeployCustomTargetTypeTimeoutsOutputReference <a name="ClouddeployCustomTargetTypeTimeoutsOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.clouddeploy_custom_target_type.ClouddeployCustomTargetTypeTimeoutsOutputReference;

new ClouddeployCustomTargetTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ClouddeployCustomTargetTypeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

---



