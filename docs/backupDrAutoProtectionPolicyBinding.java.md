# `backupDrAutoProtectionPolicyBinding` Submodule <a name="`backupDrAutoProtectionPolicyBinding` Submodule" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrAutoProtectionPolicyBinding <a name="BackupDrAutoProtectionPolicyBinding" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding google_backup_dr_auto_protection_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBinding;

BackupDrAutoProtectionPolicyBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoProtectionPolicyBindingId(java.lang.String)
    .autoProtectionPolicyId(java.lang.String)
    .location(java.lang.String)
    .scope(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BackupDrAutoProtectionPolicyBindingTimeouts)
//  .waitForDelete(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>java.lang.String</code> | The ID of the binding. This becomes the final component of the binding's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | The ID of the auto protection policy to bind. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The container that the policy is applied to, in the format 'projects/{project}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#id BackupDrAutoProtectionPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#project BackupDrAutoProtectionPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.waitForDelete">waitForDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyBindingId"></a>

- *Type:* java.lang.String

The ID of the binding. This becomes the final component of the binding's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyId"></a>

- *Type:* java.lang.String

The ID of the auto protection policy to bind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#location BackupDrAutoProtectionPolicyBinding#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The container that the policy is applied to, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#scope BackupDrAutoProtectionPolicyBinding#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#deletion_policy BackupDrAutoProtectionPolicyBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#id BackupDrAutoProtectionPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#project BackupDrAutoProtectionPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#timeouts BackupDrAutoProtectionPolicyBinding#timeouts}

---

##### `waitForDelete`<sup>Optional</sup> <a name="waitForDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.waitForDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning.

Setting
'wait_for_delete = true' will block the Terraform script/execution until all resources
are unprotected and the binding is fully removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#wait_for_delete BackupDrAutoProtectionPolicyBinding#wait_for_delete}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetWaitForDelete">resetWaitForDelete</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.putTimeouts"></a>

```java
public void putTimeouts(BackupDrAutoProtectionPolicyBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWaitForDelete` <a name="resetWaitForDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetWaitForDelete"></a>

```java
public void resetWaitForDelete()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isConstruct"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBinding;

BackupDrAutoProtectionPolicyBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBinding;

BackupDrAutoProtectionPolicyBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBinding;

BackupDrAutoProtectionPolicyBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBinding;

BackupDrAutoProtectionPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupDrAutoProtectionPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupDrAutoProtectionPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupDrAutoProtectionPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrAutoProtectionPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary">bindingEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput">autoProtectionPolicyBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput">autoProtectionPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput">waitForDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDelete">waitForDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bindingEvaluationSummary`<sup>Required</sup> <a name="bindingEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary"></a>

```java
public BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList getBindingEvaluationSummary();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeouts"></a>

```java
public BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `autoProtectionPolicyBindingIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyBindingIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput"></a>

```java
public java.lang.String getAutoProtectionPolicyBindingIdInput();
```

- *Type:* java.lang.String

---

##### `autoProtectionPolicyIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput"></a>

```java
public java.lang.String getAutoProtectionPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeoutsInput"></a>

```java
public IResolvable|BackupDrAutoProtectionPolicyBindingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `waitForDeleteInput`<sup>Optional</sup> <a name="waitForDeleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId"></a>

```java
public java.lang.String getAutoProtectionPolicyBindingId();
```

- *Type:* java.lang.String

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId"></a>

```java
public java.lang.String getAutoProtectionPolicyId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `waitForDelete`<sup>Required</sup> <a name="waitForDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDelete"></a>

```java
public java.lang.Boolean|IResolvable getWaitForDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary <a name="BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary;

BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary.builder()
    .build();
```


### BackupDrAutoProtectionPolicyBindingConfig <a name="BackupDrAutoProtectionPolicyBindingConfig" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBindingConfig;

BackupDrAutoProtectionPolicyBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoProtectionPolicyBindingId(java.lang.String)
    .autoProtectionPolicyId(java.lang.String)
    .location(java.lang.String)
    .scope(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BackupDrAutoProtectionPolicyBindingTimeouts)
//  .waitForDelete(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>java.lang.String</code> | The ID of the binding. This becomes the final component of the binding's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | The ID of the auto protection policy to bind. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The container that the policy is applied to, in the format 'projects/{project}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#id BackupDrAutoProtectionPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#project BackupDrAutoProtectionPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete">waitForDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId"></a>

```java
public java.lang.String getAutoProtectionPolicyBindingId();
```

- *Type:* java.lang.String

The ID of the binding. This becomes the final component of the binding's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId"></a>

```java
public java.lang.String getAutoProtectionPolicyId();
```

- *Type:* java.lang.String

The ID of the auto protection policy to bind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#location BackupDrAutoProtectionPolicyBinding#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The container that the policy is applied to, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#scope BackupDrAutoProtectionPolicyBinding#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#deletion_policy BackupDrAutoProtectionPolicyBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#id BackupDrAutoProtectionPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#project BackupDrAutoProtectionPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.timeouts"></a>

```java
public BackupDrAutoProtectionPolicyBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#timeouts BackupDrAutoProtectionPolicyBinding#timeouts}

---

##### `waitForDelete`<sup>Optional</sup> <a name="waitForDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete"></a>

```java
public java.lang.Boolean|IResolvable getWaitForDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning.

Setting
'wait_for_delete = true' will block the Terraform script/execution until all resources
are unprotected and the binding is fully removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#wait_for_delete BackupDrAutoProtectionPolicyBinding#wait_for_delete}

---

### BackupDrAutoProtectionPolicyBindingTimeouts <a name="BackupDrAutoProtectionPolicyBindingTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBindingTimeouts;

BackupDrAutoProtectionPolicyBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#create BackupDrAutoProtectionPolicyBinding#create}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#delete BackupDrAutoProtectionPolicyBinding#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#update BackupDrAutoProtectionPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#create BackupDrAutoProtectionPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#delete BackupDrAutoProtectionPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#update BackupDrAutoProtectionPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList <a name="BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList;

new BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get"></a>

```java
public BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference <a name="BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference;

new BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount">failedResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount">matchingResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount">protectedResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failedResourceCount`<sup>Required</sup> <a name="failedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```java
public java.lang.String getFailedResourceCount();
```

- *Type:* java.lang.String

---

##### `matchingResourceCount`<sup>Required</sup> <a name="matchingResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```java
public java.lang.String getMatchingResourceCount();
```

- *Type:* java.lang.String

---

##### `protectedResourceCount`<sup>Required</sup> <a name="protectedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```java
public java.lang.String getProtectedResourceCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue"></a>

```java
public BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a>

---


### BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference <a name="BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy_binding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference;

new BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupDrAutoProtectionPolicyBindingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

---



