# `dataGoogleStorageControlOrganizationIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlOrganizationIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummary <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummary" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary google_storage_control_organization_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .resourceScope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The ID of the Google Cloud Organization. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.resourceScope">resourceScope</a></code> | <code>java.lang.String</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The ID of the Google Cloud Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#organization DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#organization}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#filter DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#location DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#location}

---

##### `resourceScope`<sup>Optional</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.resourceScope"></a>

- *Type:* java.lang.String

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#resource_scope DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#resource_scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetResourceScope">resetResourceScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetResourceScope` <a name="resetResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetResourceScope"></a>

```java
public void resetResourceScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlOrganizationIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleStorageControlOrganizationIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleStorageControlOrganizationIntelligenceFindingsSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleStorageControlOrganizationIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlOrganizationIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.findingSummaries">findingSummaries</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScopeInput">resourceScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScope">resourceScope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `findingSummaries`<sup>Required</sup> <a name="findingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.findingSummaries"></a>

```java
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList getFindingSummaries();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `resourceScopeInput`<sup>Optional</sup> <a name="resourceScopeInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```java
public java.lang.String getResourceScopeInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `resourceScope`<sup>Required</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScope"></a>

```java
public java.lang.String getResourceScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .resourceScope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The ID of the Google Cloud Organization. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.resourceScope">resourceScope</a></code> | <code>java.lang.String</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The ID of the Google Cloud Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#organization DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#organization}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#filter DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#location DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#location}

---

##### `resourceScope`<sup>Optional</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```java
public java.lang.String getResourceScope();
```

- *Type:* java.lang.String

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#resource_scope DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries.builder()
    .build();
```


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```java
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">summaryDetails</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `summaryDetails`<sup>Required</sup> <a name="summaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```java
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList getSummaryDetails();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```java
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_control_organization_intelligence_findings_summary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">count</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```java
public java.lang.String getCount();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---



