# `backupDrAutoProtectionPolicy` Submodule <a name="`backupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google.backupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrAutoProtectionPolicy <a name="BackupDrAutoProtectionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicy;

BackupDrAutoProtectionPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoProtectionPolicyId(java.lang.String)
    .backupPlanDetails(IResolvable|java.util.List<BackupDrAutoProtectionPolicyBackupPlanDetails>)
    .criteria(BackupDrAutoProtectionPolicyCriteria)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BackupDrAutoProtectionPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.backupPlanDetails">backupPlanDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>></code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.autoProtectionPolicyId"></a>

- *Type:* java.lang.String

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `backupPlanDetails`<sup>Required</sup> <a name="backupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.backupPlanDetails"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>>

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails">putBackupPlanDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPlanDetails` <a name="putBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```java
public void putBackupPlanDetails(IResolvable|java.util.List<BackupDrAutoProtectionPolicyBackupPlanDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>>

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria"></a>

```java
public void putCriteria(BackupDrAutoProtectionPolicyCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts"></a>

```java
public void putTimeouts(BackupDrAutoProtectionPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicy;

BackupDrAutoProtectionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicy;

BackupDrAutoProtectionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicy;

BackupDrAutoProtectionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicy;

BackupDrAutoProtectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupDrAutoProtectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupDrAutoProtectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails">backupPlanDetails</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary">bindingSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary">policyEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">autoProtectionPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">backupPlanDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPlanDetails`<sup>Required</sup> <a name="backupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```java
public BackupDrAutoProtectionPolicyBackupPlanDetailsList getBackupPlanDetails();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `bindingSummary`<sup>Required</sup> <a name="bindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```java
public BackupDrAutoProtectionPolicyBindingSummaryList getBindingSummary();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria"></a>

```java
public BackupDrAutoProtectionPolicyCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyEvaluationSummary`<sup>Required</sup> <a name="policyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```java
public BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList getPolicyEvaluationSummary();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts"></a>

```java
public BackupDrAutoProtectionPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `autoProtectionPolicyIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```java
public java.lang.String getAutoProtectionPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `backupPlanDetailsInput`<sup>Optional</sup> <a name="backupPlanDetailsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```java
public IResolvable|java.util.List<BackupDrAutoProtectionPolicyBackupPlanDetails> getBackupPlanDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```java
public BackupDrAutoProtectionPolicyCriteria getCriteriaInput();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```java
public IResolvable|BackupDrAutoProtectionPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```java
public java.lang.String getAutoProtectionPolicyId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetails <a name="BackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyBackupPlanDetails;

BackupDrAutoProtectionPolicyBackupPlanDetails.builder()
    .backupPlan(java.lang.String)
    .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```java
public java.lang.String getBackupPlan();
```

- *Type:* java.lang.String

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan BackupDrAutoProtectionPolicy#backup_plan}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#resource_type BackupDrAutoProtectionPolicy#resource_type}

---

### BackupDrAutoProtectionPolicyBindingSummary <a name="BackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyBindingSummary;

BackupDrAutoProtectionPolicyBindingSummary.builder()
    .build();
```


### BackupDrAutoProtectionPolicyConfig <a name="BackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyConfig;

BackupDrAutoProtectionPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoProtectionPolicyId(java.lang.String)
    .backupPlanDetails(IResolvable|java.util.List<BackupDrAutoProtectionPolicyBackupPlanDetails>)
    .criteria(BackupDrAutoProtectionPolicyCriteria)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BackupDrAutoProtectionPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">backupPlanDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>></code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```java
public java.lang.String getAutoProtectionPolicyId();
```

- *Type:* java.lang.String

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `backupPlanDetails`<sup>Required</sup> <a name="backupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```java
public IResolvable|java.util.List<BackupDrAutoProtectionPolicyBackupPlanDetails> getBackupPlanDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>>

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```java
public BackupDrAutoProtectionPolicyCriteria getCriteria();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```java
public BackupDrAutoProtectionPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}

---

### BackupDrAutoProtectionPolicyCriteria <a name="BackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyCriteria;

BackupDrAutoProtectionPolicyCriteria.builder()
    .matchingConditions(IResolvable|java.util.List<BackupDrAutoProtectionPolicyCriteriaMatchingConditions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions">matchingConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>></code> | matching_conditions block. |

---

##### `matchingConditions`<sup>Required</sup> <a name="matchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```java
public IResolvable|java.util.List<BackupDrAutoProtectionPolicyCriteriaMatchingConditions> getMatchingConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>>

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#matching_conditions BackupDrAutoProtectionPolicy#matching_conditions}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions;

BackupDrAutoProtectionPolicyCriteriaMatchingConditions.builder()
//  .labelCondition(BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">labelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `labelCondition`<sup>Optional</sup> <a name="labelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```java
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition getLabelCondition();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#label_condition BackupDrAutoProtectionPolicy#label_condition}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;

BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">key</a></code> | <code>java.lang.String</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The values of the label to match. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#key BackupDrAutoProtectionPolicy#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#values BackupDrAutoProtectionPolicy#values}

---

### BackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary;

BackupDrAutoProtectionPolicyPolicyEvaluationSummary.builder()
    .build();
```


### BackupDrAutoProtectionPolicyTimeouts <a name="BackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyTimeouts;

BackupDrAutoProtectionPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyBackupPlanDetailsList;

new BackupDrAutoProtectionPolicyBackupPlanDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```java
public BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupDrAutoProtectionPolicyBackupPlanDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>>

---


### BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference;

new BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">backupPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupPlanInput`<sup>Optional</sup> <a name="backupPlanInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```java
public java.lang.String getBackupPlanInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```java
public java.lang.String getBackupPlan();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupDrAutoProtectionPolicyBackupPlanDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>

---


### BackupDrAutoProtectionPolicyBindingSummaryList <a name="BackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyBindingSummaryList;

new BackupDrAutoProtectionPolicyBindingSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```java
public BackupDrAutoProtectionPolicyBindingSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="BackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference;

new BackupDrAutoProtectionPolicyBindingSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">projectCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectCount`<sup>Required</sup> <a name="projectCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```java
public java.lang.String getProjectCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```java
public BackupDrAutoProtectionPolicyBindingSummary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```java
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```java
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupDrAutoProtectionPolicyCriteriaMatchingConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference;

new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">putLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">resetLabelCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelCondition` <a name="putLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```java
public void putLabelCondition(BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `resetLabelCondition` <a name="resetLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```java
public void resetLabelCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">labelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">labelConditionInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelCondition`<sup>Required</sup> <a name="labelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```java
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference getLabelCondition();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `labelConditionInput`<sup>Optional</sup> <a name="labelConditionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```java
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition getLabelConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupDrAutoProtectionPolicyCriteriaMatchingConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>

---


### BackupDrAutoProtectionPolicyCriteriaOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyCriteriaOutputReference;

new BackupDrAutoProtectionPolicyCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">putMatchingConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingConditions` <a name="putMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```java
public void putMatchingConditions(IResolvable|java.util.List<BackupDrAutoProtectionPolicyCriteriaMatchingConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">matchingConditions</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">matchingConditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchingConditions`<sup>Required</sup> <a name="matchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```java
public BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList getMatchingConditions();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `matchingConditionsInput`<sup>Optional</sup> <a name="matchingConditionsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```java
public IResolvable|java.util.List<BackupDrAutoProtectionPolicyCriteriaMatchingConditions> getMatchingConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```java
public BackupDrAutoProtectionPolicyCriteria getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList;

new BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```java
public BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference;

new BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">failedResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">matchingResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">protectedResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failedResourceCount`<sup>Required</sup> <a name="failedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```java
public java.lang.String getFailedResourceCount();
```

- *Type:* java.lang.String

---

##### `matchingResourceCount`<sup>Required</sup> <a name="matchingResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```java
public java.lang.String getMatchingResourceCount();
```

- *Type:* java.lang.String

---

##### `protectedResourceCount`<sup>Required</sup> <a name="protectedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```java
public java.lang.String getProtectedResourceCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```java
public BackupDrAutoProtectionPolicyPolicyEvaluationSummary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### BackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="BackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_auto_protection_policy.BackupDrAutoProtectionPolicyTimeoutsOutputReference;

new BackupDrAutoProtectionPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupDrAutoProtectionPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---



