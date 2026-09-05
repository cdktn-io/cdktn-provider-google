# `dataGoogleBackupDrBackupPlanAssociations` Submodule <a name="`dataGoogleBackupDrBackupPlanAssociations` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlanAssociations <a name="DataGoogleBackupDrBackupPlanAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations google_backup_dr_backup_plan_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociations;

DataGoogleBackupDrBackupPlanAssociations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location to list the backup plan associations from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location to list the backup plan associations from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#location DataGoogleBackupDrBackupPlanAssociations#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#project DataGoogleBackupDrBackupPlanAssociations#project}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#resource_type DataGoogleBackupDrBackupPlanAssociations#resource_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject"></a>

```java
public void resetProject()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType"></a>

```java
public void resetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociations;

DataGoogleBackupDrBackupPlanAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociations;

DataGoogleBackupDrBackupPlanAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociations;

DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociations;

DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleBackupDrBackupPlanAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations">associations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsList getAssociations();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociations <a name="DataGoogleBackupDrBackupPlanAssociationsAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociations;

DataGoogleBackupDrBackupPlanAssociationsAssociations.builder()
    .build();
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo;

DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo.builder()
    .build();
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError;

DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError.builder()
    .build();
```


### DataGoogleBackupDrBackupPlanAssociationsConfig <a name="DataGoogleBackupDrBackupPlanAssociationsConfig" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsConfig;

DataGoogleBackupDrBackupPlanAssociationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location to list the backup plan associations from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location to list the backup plan associations from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#location DataGoogleBackupDrBackupPlanAssociations#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#project DataGoogleBackupDrBackupPlanAssociations#project}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_backup_plan_associations#resource_type DataGoogleBackupDrBackupPlanAssociations#resource_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociationsList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo">rulesConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan"></a>

```java
public java.lang.String getBackupPlan();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `rulesConfigInfo`<sup>Required</sup> <a name="rulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList getRulesConfigInfo();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_backup_plan_associations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList getLastBackupError();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a>

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState"></a>

```java
public java.lang.String getLastBackupState();
```

- *Type:* java.lang.String

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```java
public java.lang.String getLastSuccessfulBackupConsistencyTime();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a>

---



