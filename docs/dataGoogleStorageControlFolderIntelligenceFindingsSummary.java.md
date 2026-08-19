# `dataGoogleStorageControlFolderIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlFolderIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlFolderIntelligenceFindingsSummary <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummary" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary google_storage_control_folder_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummary;

DataGoogleStorageControlFolderIntelligenceFindingsSummary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .folder(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .resourceScope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The ID of the Google Cloud Folder. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#id DataGoogleStorageControlFolderIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.resourceScope">resourceScope</a></code> | <code>java.lang.String</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The ID of the Google Cloud Folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#folder DataGoogleStorageControlFolderIntelligenceFindingsSummary#folder}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#filter DataGoogleStorageControlFolderIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#id DataGoogleStorageControlFolderIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#location DataGoogleStorageControlFolderIntelligenceFindingsSummary#location}

---

##### `resourceScope`<sup>Optional</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.resourceScope"></a>

- *Type:* java.lang.String

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#resource_scope DataGoogleStorageControlFolderIntelligenceFindingsSummary#resource_scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetResourceScope">resetResourceScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetResourceScope` <a name="resetResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetResourceScope"></a>

```java
public void resetResourceScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlFolderIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummary;

DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummary;

DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummary;

DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummary;

DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleStorageControlFolderIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleStorageControlFolderIntelligenceFindingsSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleStorageControlFolderIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlFolderIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.findingSummaries">findingSummaries</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScopeInput">resourceScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScope">resourceScope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `findingSummaries`<sup>Required</sup> <a name="findingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.findingSummaries"></a>

```java
public DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList getFindingSummaries();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `resourceScopeInput`<sup>Optional</sup> <a name="resourceScopeInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```java
public java.lang.String getResourceScopeInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceScope`<sup>Required</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScope"></a>

```java
public java.lang.String getResourceScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig;

DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .folder(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .resourceScope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The ID of the Google Cloud Folder. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#id DataGoogleStorageControlFolderIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.resourceScope">resourceScope</a></code> | <code>java.lang.String</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The ID of the Google Cloud Folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#folder DataGoogleStorageControlFolderIntelligenceFindingsSummary#folder}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#filter DataGoogleStorageControlFolderIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#id DataGoogleStorageControlFolderIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#location DataGoogleStorageControlFolderIntelligenceFindingsSummary#location}

---

##### `resourceScope`<sup>Optional</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```java
public java.lang.String getResourceScope();
```

- *Type:* java.lang.String

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#resource_scope DataGoogleStorageControlFolderIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries;

DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries.builder()
    .build();
```


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails;

DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList;

new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```java
public DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference;

new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">summaryDetails</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `summaryDetails`<sup>Required</sup> <a name="summaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```java
public DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList getSummaryDetails();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList;

new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```java
public DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_folder_intelligence_findings_summary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference;

new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">count</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```java
public java.lang.String getCount();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---



