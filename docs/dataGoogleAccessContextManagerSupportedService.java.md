# `dataGoogleAccessContextManagerSupportedService` Submodule <a name="`dataGoogleAccessContextManagerSupportedService` Submodule" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerSupportedService <a name="DataGoogleAccessContextManagerSupportedService" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service google_access_context_manager_supported_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedService;

DataGoogleAccessContextManagerSupportedService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the service to get information about. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

The name of the service to get information about.

The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#service_name DataGoogleAccessContextManagerSupportedService#service_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedService;

DataGoogleAccessContextManagerSupportedService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedService;

DataGoogleAccessContextManagerSupportedService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedService;

DataGoogleAccessContextManagerSupportedService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedService;

DataGoogleAccessContextManagerSupportedService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleAccessContextManagerSupportedService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleAccessContextManagerSupportedService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleAccessContextManagerSupportedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerSupportedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip">availableOnRestrictedVip</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations">knownLimitations</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage">serviceSupportStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods">supportedMethods</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage">supportStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `availableOnRestrictedVip`<sup>Required</sup> <a name="availableOnRestrictedVip" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip"></a>

```java
public IResolvable getAvailableOnRestrictedVip();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `knownLimitations`<sup>Required</sup> <a name="knownLimitations" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations"></a>

```java
public IResolvable getKnownLimitations();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `serviceSupportStage`<sup>Required</sup> <a name="serviceSupportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage"></a>

```java
public java.lang.String getServiceSupportStage();
```

- *Type:* java.lang.String

---

##### `supportedMethods`<sup>Required</sup> <a name="supportedMethods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods"></a>

```java
public DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList getSupportedMethods();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a>

---

##### `supportStage`<sup>Required</sup> <a name="supportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage"></a>

```java
public java.lang.String getSupportStage();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerSupportedServiceConfig <a name="DataGoogleAccessContextManagerSupportedServiceConfig" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedServiceConfig;

DataGoogleAccessContextManagerSupportedServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the service to get information about. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the service to get information about.

The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#service_name DataGoogleAccessContextManagerSupportedService#service_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleAccessContextManagerSupportedServiceSupportedMethods <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedServiceSupportedMethods;

DataGoogleAccessContextManagerSupportedServiceSupportedMethods.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList;

new DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get"></a>

```java
public DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_access_context_manager_supported_service.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference;

new DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue"></a>

```java
public DataGoogleAccessContextManagerSupportedServiceSupportedMethods getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a>

---



