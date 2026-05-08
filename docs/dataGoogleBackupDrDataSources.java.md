# `dataGoogleBackupDrDataSources` Submodule <a name="`dataGoogleBackupDrDataSources` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSources <a name="DataGoogleBackupDrDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources google_backup_dr_data_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSources;

DataGoogleBackupDrDataSources.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupVaultId(java.lang.String)
    .location(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .orderBy(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply to list results. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.orderBy">orderBy</a></code> | <code>java.lang.String</code> | The order to sort results by. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.backupVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The filter to apply to list results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#filter DataGoogleBackupDrDataSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.orderBy"></a>

- *Type:* java.lang.String

The order to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#order_by DataGoogleBackupDrDataSources#order_by}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId"></a>

```java
public void resetId()
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSources;

DataGoogleBackupDrDataSources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSources;

DataGoogleBackupDrDataSources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSources;

DataGoogleBackupDrDataSources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSources;

DataGoogleBackupDrDataSources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleBackupDrDataSources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleBackupDrDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleBackupDrDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesList getDataSources();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a>

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput"></a>

```java
public java.lang.String getBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourcesConfig <a name="DataGoogleBackupDrDataSourcesConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesConfig;

DataGoogleBackupDrDataSourcesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupVaultId(java.lang.String)
    .location(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .orderBy(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply to list results. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | The order to sort results by. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to apply to list results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#filter DataGoogleBackupDrDataSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

The order to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#order_by DataGoogleBackupDrDataSources#order_by}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}.

---

### DataGoogleBackupDrDataSourcesDataSources <a name="DataGoogleBackupDrDataSourcesDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSources;

DataGoogleBackupDrDataSourcesDataSources.builder()
    .build();
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo;

DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo.builder()
    .build();
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig;

DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig.builder()
    .build();
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig;

DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig.builder()
    .build();
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication;

DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication.builder()
    .build();
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource;

DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource.builder()
    .build();
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties;

DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">backupApplianceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">backupApplianceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">slaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">slpName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">sltName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `backupApplianceId`<sup>Required</sup> <a name="backupApplianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```java
public java.lang.String getBackupApplianceId();
```

- *Type:* java.lang.String

---

##### `backupApplianceName`<sup>Required</sup> <a name="backupApplianceName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```java
public java.lang.String getBackupApplianceName();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `slaId`<sup>Required</sup> <a name="slaId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```java
public java.lang.String getSlaId();
```

- *Type:* java.lang.String

---

##### `slpName`<sup>Required</sup> <a name="slpName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```java
public java.lang.String getSlpName();
```

- *Type:* java.lang.String

---

##### `sltName`<sup>Required</sup> <a name="sltName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```java
public java.lang.String getSltName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">backupPlanAssociation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">backupPlanDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">backupPlanRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```java
public java.lang.String getBackupPlan();
```

- *Type:* java.lang.String

---

##### `backupPlanAssociation`<sup>Required</sup> <a name="backupPlanAssociation" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```java
public java.lang.String getBackupPlanAssociation();
```

- *Type:* java.lang.String

---

##### `backupPlanDescription`<sup>Required</sup> <a name="backupPlanDescription" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```java
public java.lang.String getBackupPlanDescription();
```

- *Type:* java.lang.String

---

##### `backupPlanRules`<sup>Required</sup> <a name="backupPlanRules" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```java
public java.util.List<java.lang.String> getBackupPlanRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">backupApplianceBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig">gcpBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupApplianceBackupConfig`<sup>Required</sup> <a name="backupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList getBackupApplianceBackupConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `gcpBackupConfig`<sup>Required</sup> <a name="gcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList getGcpBackupConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a>

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError"></a>

```java
public StringMap getLastBackupError();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState"></a>

```java
public java.lang.String getLastBackupState();
```

- *Type:* java.lang.String

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```java
public java.lang.String getLastSuccessfulBackupConsistencyTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId">applianceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">backupAppliance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applianceId`<sup>Required</sup> <a name="applianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```java
public java.lang.String getApplianceId();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `backupAppliance`<sup>Required</sup> <a name="backupAppliance" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```java
public java.lang.String getBackupAppliance();
```

- *Type:* java.lang.String

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">totalDiskCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">totalDiskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `totalDiskCount`<sup>Required</sup> <a name="totalDiskCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```java
public java.lang.String getTotalDiskCount();
```

- *Type:* java.lang.String

---

##### `totalDiskSizeGb`<sup>Required</sup> <a name="totalDiskSizeGb" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```java
public java.lang.String getTotalDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">computeInstanceDataSourceProperties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename">gcpResourcename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeInstanceDataSourceProperties`<sup>Required</sup> <a name="computeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList getComputeInstanceDataSourceProperties();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `gcpResourcename`<sup>Required</sup> <a name="gcpResourcename" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```java
public java.lang.String getGcpResourcename();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesList <a name="DataGoogleBackupDrDataSourcesDataSourcesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesList;

new DataGoogleBackupDrDataSourcesDataSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourcesDataSourcesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_backup_dr_data_sources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference;

new DataGoogleBackupDrDataSourcesDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo">backupConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount">backupCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState">configState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication">dataSourceBackupApplianceApplication</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource">dataSourceGcpResource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes">totalStoredBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupConfigInfo`<sup>Required</sup> <a name="backupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList getBackupConfigInfo();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a>

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount"></a>

```java
public java.lang.String getBackupCount();
```

- *Type:* java.lang.String

---

##### `configState`<sup>Required</sup> <a name="configState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState"></a>

```java
public java.lang.String getConfigState();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataSourceBackupApplianceApplication`<sup>Required</sup> <a name="dataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList getDataSourceBackupApplianceApplication();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a>

---

##### `dataSourceGcpResource`<sup>Required</sup> <a name="dataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource"></a>

```java
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList getDataSourceGcpResource();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `totalStoredBytes`<sup>Required</sup> <a name="totalStoredBytes" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes"></a>

```java
public java.lang.String getTotalStoredBytes();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourcesDataSources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a>

---



