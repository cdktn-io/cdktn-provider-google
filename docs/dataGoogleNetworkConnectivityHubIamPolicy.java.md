# `dataGoogleNetworkConnectivityHubIamPolicy` Submodule <a name="`dataGoogleNetworkConnectivityHubIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkConnectivityHubIamPolicy <a name="DataGoogleNetworkConnectivityHubIamPolicy" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy google_network_connectivity_hub_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_connectivity_hub_iam_policy.DataGoogleNetworkConnectivityHubIamPolicy;

DataGoogleNetworkConnectivityHubIamPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hub(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.hub">hub</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.hub"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkConnectivityHubIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_network_connectivity_hub_iam_policy.DataGoogleNetworkConnectivityHubIamPolicy;

DataGoogleNetworkConnectivityHubIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_network_connectivity_hub_iam_policy.DataGoogleNetworkConnectivityHubIamPolicy;

DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_network_connectivity_hub_iam_policy.DataGoogleNetworkConnectivityHubIamPolicy;

DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_network_connectivity_hub_iam_policy.DataGoogleNetworkConnectivityHubIamPolicy;

DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleNetworkConnectivityHubIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleNetworkConnectivityHubIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleNetworkConnectivityHubIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkConnectivityHubIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hubInput">hubInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hub">hub</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hubInput"></a>

```java
public java.lang.String getHubInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hub"></a>

```java
public java.lang.String getHub();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkConnectivityHubIamPolicyConfig <a name="DataGoogleNetworkConnectivityHubIamPolicyConfig" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_connectivity_hub_iam_policy.DataGoogleNetworkConnectivityHubIamPolicyConfig;

DataGoogleNetworkConnectivityHubIamPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hub(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.hub">hub</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.hub"></a>

```java
public java.lang.String getHub();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}.

---



