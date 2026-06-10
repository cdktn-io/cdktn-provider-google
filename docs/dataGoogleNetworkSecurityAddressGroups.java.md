# `dataGoogleNetworkSecurityAddressGroups` Submodule <a name="`dataGoogleNetworkSecurityAddressGroups` Submodule" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkSecurityAddressGroups <a name="DataGoogleNetworkSecurityAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups google_network_security_address_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroups;

DataGoogleNetworkSecurityAddressGroups.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .parent(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#parent DataGoogleNetworkSecurityAddressGroups#parent}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId"></a>

```java
public void resetId()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent"></a>

```java
public void resetParent()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroups;

DataGoogleNetworkSecurityAddressGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroups;

DataGoogleNetworkSecurityAddressGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroups;

DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroups;

DataGoogleNetworkSecurityAddressGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleNetworkSecurityAddressGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleNetworkSecurityAddressGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleNetworkSecurityAddressGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkSecurityAddressGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups">addressGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `addressGroups`<sup>Required</sup> <a name="addressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups"></a>

```java
public DataGoogleNetworkSecurityAddressGroupsAddressGroupsList getAddressGroups();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroups <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroupsAddressGroups;

DataGoogleNetworkSecurityAddressGroupsAddressGroups.builder()
    .build();
```


### DataGoogleNetworkSecurityAddressGroupsConfig <a name="DataGoogleNetworkSecurityAddressGroupsConfig" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroupsConfig;

DataGoogleNetworkSecurityAddressGroupsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .parent(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#parent DataGoogleNetworkSecurityAddressGroups#parent}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroupsList <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsList" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList;

new DataGoogleNetworkSecurityAddressGroupsAddressGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get"></a>

```java
public DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_security_address_groups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference;

new DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue"></a>

```java
public DataGoogleNetworkSecurityAddressGroupsAddressGroups getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a>

---



