# `dataGoogleCloudbuildWorkerPool` Submodule <a name="`dataGoogleCloudbuildWorkerPool` Submodule" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildWorkerPool <a name="DataGoogleCloudbuildWorkerPool" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPool(Construct Scope, string Id, DataGoogleCloudbuildWorkerPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig">DataGoogleCloudbuildWorkerPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig">DataGoogleCloudbuildWorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudbuildWorkerPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudbuildWorkerPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudbuildWorkerPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudbuildWorkerPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudbuildWorkerPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations">Annotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect">PrivateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations"></a>

```csharp
public StringMap Annotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig"></a>

```csharp
public DataGoogleCloudbuildWorkerPoolNetworkConfigList NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a>

---

##### `PrivateServiceConnect`<sup>Required</sup> <a name="PrivateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```csharp
public DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList PrivateServiceConnect { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkerConfig`<sup>Required</sup> <a name="WorkerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig"></a>

```csharp
public DataGoogleCloudbuildWorkerPoolWorkerConfigList WorkerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildWorkerPoolConfig <a name="DataGoogleCloudbuildWorkerPoolConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name">Name</a></code> | <code>string</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#location DataGoogleCloudbuildWorkerPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#name DataGoogleCloudbuildWorkerPool#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#project DataGoogleCloudbuildWorkerPool#project}

---

### DataGoogleCloudbuildWorkerPoolNetworkConfig <a name="DataGoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolNetworkConfig {

};
```


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolPrivateServiceConnect {

};
```


### DataGoogleCloudbuildWorkerPoolWorkerConfig <a name="DataGoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolWorkerConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildWorkerPoolNetworkConfigList <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolNetworkConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get"></a>

```csharp
private DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">PeeredNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">PeeredNetworkIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeeredNetwork`<sup>Required</sup> <a name="PeeredNetwork" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```csharp
public string PeeredNetwork { get; }
```

- *Type:* string

---

##### `PeeredNetworkIpRange`<sup>Required</sup> <a name="PeeredNetworkIpRange" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```csharp
public string PeeredNetworkIpRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildWorkerPoolNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get"></a>

```csharp
private DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">RouteAllTraffic</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `RouteAllTraffic`<sup>Required</sup> <a name="RouteAllTraffic" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```csharp
public IResolvable RouteAllTraffic { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildWorkerPoolPrivateServiceConnect InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigList <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolWorkerConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get"></a>

```csharp
private DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">NoExternalIp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization"></a>

```csharp
public IResolvable EnableNestedVirtualization { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `NoExternalIp`<sup>Required</sup> <a name="NoExternalIp" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```csharp
public IResolvable NoExternalIp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildWorkerPoolWorkerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a>

---



