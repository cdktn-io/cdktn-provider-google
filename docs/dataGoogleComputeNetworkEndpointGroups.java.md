# `dataGoogleComputeNetworkEndpointGroups` Submodule <a name="`dataGoogleComputeNetworkEndpointGroups` Submodule" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups google_compute_network_endpoint_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroups;

DataGoogleComputeNetworkEndpointGroups.Builder.create(Construct scope, java.lang.String id)
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
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject"></a>

```java
public void resetProject()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroups;

DataGoogleComputeNetworkEndpointGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroups;

DataGoogleComputeNetworkEndpointGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroups;

DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroups;

DataGoogleComputeNetworkEndpointGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeNetworkEndpointGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeNetworkEndpointGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeNetworkEndpointGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetworkEndpointGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups">networkEndpointGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `networkEndpointGroups`<sup>Required</sup> <a name="networkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups"></a>

```java
public DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList getNetworkEndpointGroups();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkEndpointGroupsConfig <a name="DataGoogleComputeNetworkEndpointGroupsConfig" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroupsConfig;

DataGoogleComputeNetworkEndpointGroupsConfig.builder()
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
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}.

---

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups;

DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList;

new DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get"></a>

```java
public DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_network_endpoint_groups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference;

new DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort">defaultPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId">generatedId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPort`<sup>Required</sup> <a name="defaultPort" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort"></a>

```java
public java.lang.Number getDefaultPort();
```

- *Type:* java.lang.Number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId"></a>

```java
public java.lang.Number getGeneratedId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a>

---



