# `dataGoogleNetworkServicesGateway` Submodule <a name="`dataGoogleNetworkServicesGateway` Submodule" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkServicesGateway <a name="DataGoogleNetworkServicesGateway" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_services_gateway.DataGoogleNetworkServicesGateway;

DataGoogleNetworkServicesGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Gateway resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#location DataGoogleNetworkServicesGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#name DataGoogleNetworkServicesGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkServicesGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_network_services_gateway.DataGoogleNetworkServicesGateway;

DataGoogleNetworkServicesGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_network_services_gateway.DataGoogleNetworkServicesGateway;

DataGoogleNetworkServicesGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_network_services_gateway.DataGoogleNetworkServicesGateway;

DataGoogleNetworkServicesGateway.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_network_services_gateway.DataGoogleNetworkServicesGateway;

DataGoogleNetworkServicesGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleNetworkServicesGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleNetworkServicesGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleNetworkServicesGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleNetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allowGlobalAccess">allowGlobalAccess</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allPorts">allPorts</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.certificateUrls">certificateUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">deleteSwgAutogenRouterOnDestroy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.envoyHeaders">envoyHeaders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.routingMode">routingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowGlobalAccess`<sup>Required</sup> <a name="allowGlobalAccess" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allowGlobalAccess"></a>

```java
public IResolvable getAllowGlobalAccess();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `allPorts`<sup>Required</sup> <a name="allPorts" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allPorts"></a>

```java
public IResolvable getAllPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `certificateUrls`<sup>Required</sup> <a name="certificateUrls" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.certificateUrls"></a>

```java
public java.util.List<java.lang.String> getCertificateUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteSwgAutogenRouterOnDestroy`<sup>Required</sup> <a name="deleteSwgAutogenRouterOnDestroy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```java
public IResolvable getDeleteSwgAutogenRouterOnDestroy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `envoyHeaders`<sup>Required</sup> <a name="envoyHeaders" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.envoyHeaders"></a>

```java
public java.lang.String getEnvoyHeaders();
```

- *Type:* java.lang.String

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```java
public java.lang.String getGatewaySecurityPolicy();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.routingMode"></a>

```java
public java.lang.String getRoutingMode();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.serverTlsPolicy"></a>

```java
public java.lang.String getServerTlsPolicy();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkServicesGatewayConfig <a name="DataGoogleNetworkServicesGatewayConfig" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_network_services_gateway.DataGoogleNetworkServicesGatewayConfig;

DataGoogleNetworkServicesGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Gateway resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#location DataGoogleNetworkServicesGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#name DataGoogleNetworkServicesGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}.

---



