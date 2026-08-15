# `gkeBackupRestoreChannel` Submodule <a name="`gkeBackupRestoreChannel` Submodule" id="@cdktn/provider-google.gkeBackupRestoreChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestoreChannel <a name="GkeBackupRestoreChannel" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel google_gke_backup_restore_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannel;

GkeBackupRestoreChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationProject(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GkeBackupRestoreChannelTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.destinationProject">destinationProject</a></code> | <code>java.lang.String</code> | The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region of the Restore Channel. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The full name of the RestoreChannel Resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User specified descriptive string for this RestoreChannel. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#id GkeBackupRestoreChannel#id}. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#project GkeBackupRestoreChannel#project}. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationProject`<sup>Required</sup> <a name="destinationProject" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.destinationProject"></a>

- *Type:* java.lang.String

The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#destination_project GkeBackupRestoreChannel#destination_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region of the Restore Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#location GkeBackupRestoreChannel#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The full name of the RestoreChannel Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#name GkeBackupRestoreChannel#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#deletion_policy GkeBackupRestoreChannel#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User specified descriptive string for this RestoreChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#description GkeBackupRestoreChannel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#id GkeBackupRestoreChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#labels GkeBackupRestoreChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#project GkeBackupRestoreChannel#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#timeouts GkeBackupRestoreChannel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.putTimeouts"></a>

```java
public void putTimeouts(GkeBackupRestoreChannelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GkeBackupRestoreChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isConstruct"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannel;

GkeBackupRestoreChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannel;

GkeBackupRestoreChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannel;

GkeBackupRestoreChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannel;

GkeBackupRestoreChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GkeBackupRestoreChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GkeBackupRestoreChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GkeBackupRestoreChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GkeBackupRestoreChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GkeBackupRestoreChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectId">destinationProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference">GkeBackupRestoreChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectInput">destinationProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProject">destinationProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationProjectId`<sup>Required</sup> <a name="destinationProjectId" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectId"></a>

```java
public java.lang.String getDestinationProjectId();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeouts"></a>

```java
public GkeBackupRestoreChannelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference">GkeBackupRestoreChannelTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationProjectInput`<sup>Optional</sup> <a name="destinationProjectInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectInput"></a>

```java
public java.lang.String getDestinationProjectInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeoutsInput"></a>

```java
public IResolvable|GkeBackupRestoreChannelTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationProject`<sup>Required</sup> <a name="destinationProject" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProject"></a>

```java
public java.lang.String getDestinationProject();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestoreChannelConfig <a name="GkeBackupRestoreChannelConfig" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannelConfig;

GkeBackupRestoreChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationProject(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GkeBackupRestoreChannelTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.destinationProject">destinationProject</a></code> | <code>java.lang.String</code> | The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region of the Restore Channel. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The full name of the RestoreChannel Resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.description">description</a></code> | <code>java.lang.String</code> | User specified descriptive string for this RestoreChannel. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#id GkeBackupRestoreChannel#id}. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#project GkeBackupRestoreChannel#project}. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationProject`<sup>Required</sup> <a name="destinationProject" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.destinationProject"></a>

```java
public java.lang.String getDestinationProject();
```

- *Type:* java.lang.String

The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#destination_project GkeBackupRestoreChannel#destination_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region of the Restore Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#location GkeBackupRestoreChannel#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The full name of the RestoreChannel Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#name GkeBackupRestoreChannel#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#deletion_policy GkeBackupRestoreChannel#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User specified descriptive string for this RestoreChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#description GkeBackupRestoreChannel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#id GkeBackupRestoreChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#labels GkeBackupRestoreChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#project GkeBackupRestoreChannel#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.timeouts"></a>

```java
public GkeBackupRestoreChannelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#timeouts GkeBackupRestoreChannel#timeouts}

---

### GkeBackupRestoreChannelTimeouts <a name="GkeBackupRestoreChannelTimeouts" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannelTimeouts;

GkeBackupRestoreChannelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#create GkeBackupRestoreChannel#create}. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#delete GkeBackupRestoreChannel#delete}. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#update GkeBackupRestoreChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#create GkeBackupRestoreChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#delete GkeBackupRestoreChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_backup_restore_channel#update GkeBackupRestoreChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestoreChannelTimeoutsOutputReference <a name="GkeBackupRestoreChannelTimeoutsOutputReference" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_backup_restore_channel.GkeBackupRestoreChannelTimeoutsOutputReference;

new GkeBackupRestoreChannelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GkeBackupRestoreChannelTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a>

---



