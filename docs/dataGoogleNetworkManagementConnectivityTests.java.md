# `dataGoogleNetworkManagementConnectivityTests` Submodule <a name="`dataGoogleNetworkManagementConnectivityTests` Submodule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkManagementConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests google_network_management_connectivity_tests}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTests;

DataGoogleNetworkManagementConnectivityTests.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#filter DataGoogleNetworkManagementConnectivityTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTests;

DataGoogleNetworkManagementConnectivityTests.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTests;

DataGoogleNetworkManagementConnectivityTests.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTests;

DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTests;

DataGoogleNetworkManagementConnectivityTests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleNetworkManagementConnectivityTests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleNetworkManagementConnectivityTests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleNetworkManagementConnectivityTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkManagementConnectivityTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests">connectivityTests</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `connectivityTests`<sup>Required</sup> <a name="connectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList getConnectivityTests();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkManagementConnectivityTestsConfig <a name="DataGoogleNetworkManagementConnectivityTestsConfig" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConfig;

DataGoogleNetworkManagementConnectivityTestsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#filter DataGoogleNetworkManagementConnectivityTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}.

---

### DataGoogleNetworkManagementConnectivityTestsConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests;

DataGoogleNetworkManagementConnectivityTestsConnectivityTests.builder()
    .build();
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination;

DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination.builder()
    .build();
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource;

DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource.builder()
    .build();
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion;

DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion.builder()
    .build();
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction;

DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction.builder()
    .build();
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision;

DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster">gkeMasterCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkePod">gkePod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster">redisCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance">redisInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance"></a>

```java
public java.lang.String getCloudSqlInstance();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `gkeMasterCluster`<sup>Required</sup> <a name="gkeMasterCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster"></a>

```java
public java.lang.String getGkeMasterCluster();
```

- *Type:* java.lang.String

---

##### `gkePod`<sup>Required</sup> <a name="gkePod" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkePod"></a>

```java
public java.lang.String getGkePod();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `redisCluster`<sup>Required</sup> <a name="redisCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster"></a>

```java
public java.lang.String getRedisCluster();
```

- *Type:* java.lang.String

---

##### `redisInstance`<sup>Required</sup> <a name="redisInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance"></a>

```java
public java.lang.String getRedisInstance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks">bypassFirewallChecks</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects">relatedProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip">roundTrip</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassFirewallChecks`<sup>Required</sup> <a name="bypassFirewallChecks" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks"></a>

```java
public IResolvable getBypassFirewallChecks();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList getDestination();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `relatedProjects`<sup>Required</sup> <a name="relatedProjects" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects"></a>

```java
public java.util.List<java.lang.String> getRelatedProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roundTrip`<sup>Required</sup> <a name="roundTrip" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip"></a>

```java
public IResolvable getRoundTrip();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList getSource();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTests getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_management_connectivity_tests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference;

new DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion">appEngineVersion</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision">cloudRunRevision</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster">gkeMasterCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appEngineVersion`<sup>Required</sup> <a name="appEngineVersion" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList getAppEngineVersion();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a>

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList getCloudFunction();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a>

---

##### `cloudRunRevision`<sup>Required</sup> <a name="cloudRunRevision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList getCloudRunRevision();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a>

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance"></a>

```java
public java.lang.String getCloudSqlInstance();
```

- *Type:* java.lang.String

---

##### `gkeMasterCluster`<sup>Required</sup> <a name="gkeMasterCluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster"></a>

```java
public java.lang.String getGkeMasterCluster();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a>

---



