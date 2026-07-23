# `dataGoogleComputeStoragePool` Submodule <a name="`dataGoogleComputeStoragePool` Submodule" id="@cdktn/provider-google.dataGoogleComputeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeStoragePool <a name="DataGoogleComputeStoragePool" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePool(Construct Scope, string Id, DataGoogleComputeStoragePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig">DataGoogleComputeStoragePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig">DataGoogleComputeStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeStoragePool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeStoragePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeStoragePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeStoragePool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeStoragePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComputeStoragePool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeStoragePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.capacityProvisioningType">CapacityProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionProtection">DeletionProtection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList">DataGoogleComputeStoragePoolParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.performanceProvisioningType">PerformanceProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedCapacityGb">PoolProvisionedCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedIops">PoolProvisionedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedThroughput">PoolProvisionedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.resourceStatus">ResourceStatus</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList">DataGoogleComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.status">Status</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList">DataGoogleComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.storagePoolType">StoragePoolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CapacityProvisioningType`<sup>Required</sup> <a name="CapacityProvisioningType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.capacityProvisioningType"></a>

```csharp
public string CapacityProvisioningType { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.params"></a>

```csharp
public DataGoogleComputeStoragePoolParamsList Params { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList">DataGoogleComputeStoragePoolParamsList</a>

---

##### `PerformanceProvisioningType`<sup>Required</sup> <a name="PerformanceProvisioningType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.performanceProvisioningType"></a>

```csharp
public string PerformanceProvisioningType { get; }
```

- *Type:* string

---

##### `PoolProvisionedCapacityGb`<sup>Required</sup> <a name="PoolProvisionedCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```csharp
public string PoolProvisionedCapacityGb { get; }
```

- *Type:* string

---

##### `PoolProvisionedIops`<sup>Required</sup> <a name="PoolProvisionedIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedIops"></a>

```csharp
public string PoolProvisionedIops { get; }
```

- *Type:* string

---

##### `PoolProvisionedThroughput`<sup>Required</sup> <a name="PoolProvisionedThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.poolProvisionedThroughput"></a>

```csharp
public string PoolProvisionedThroughput { get; }
```

- *Type:* string

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.resourceStatus"></a>

```csharp
public DataGoogleComputeStoragePoolResourceStatusList ResourceStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList">DataGoogleComputeStoragePoolResourceStatusList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.status"></a>

```csharp
public DataGoogleComputeStoragePoolStatusList Status { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList">DataGoogleComputeStoragePoolStatusList</a>

---

##### `StoragePoolType`<sup>Required</sup> <a name="StoragePoolType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.storagePoolType"></a>

```csharp
public string StoragePoolType { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeStoragePoolConfig <a name="DataGoogleComputeStoragePoolConfig" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Zone,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.zone">Zone</a></code> | <code>string</code> | A reference to the zone where the storage pool resides. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_storage_pool#project DataGoogleComputeStoragePool#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_storage_pool#name DataGoogleComputeStoragePool#name}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_storage_pool#zone DataGoogleComputeStoragePool#zone}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_storage_pool#project DataGoogleComputeStoragePool#project}.

---

### DataGoogleComputeStoragePoolParams <a name="DataGoogleComputeStoragePoolParams" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolParams {

};
```


### DataGoogleComputeStoragePoolResourceStatus <a name="DataGoogleComputeStoragePoolResourceStatus" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolResourceStatus {

};
```


### DataGoogleComputeStoragePoolStatus <a name="DataGoogleComputeStoragePoolStatus" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeStoragePoolParamsList <a name="DataGoogleComputeStoragePoolParamsList" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.get"></a>

```csharp
private DataGoogleComputeStoragePoolParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeStoragePoolParamsOutputReference <a name="DataGoogleComputeStoragePoolParamsOutputReference" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams">DataGoogleComputeStoragePoolParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public StringMap ResourceManagerTags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParamsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeStoragePoolParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolParams">DataGoogleComputeStoragePoolParams</a>

---


### DataGoogleComputeStoragePoolResourceStatusList <a name="DataGoogleComputeStoragePoolResourceStatusList" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolResourceStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.get"></a>

```csharp
private DataGoogleComputeStoragePoolResourceStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeStoragePoolResourceStatusOutputReference <a name="DataGoogleComputeStoragePoolResourceStatusOutputReference" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolResourceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount">DiskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">LastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">MaxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">PoolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">PoolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">PoolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">PoolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">TotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">TotalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">TotalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus">DataGoogleComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```csharp
public string DiskCount { get; }
```

- *Type:* string

---

##### `LastResizeTimestamp`<sup>Required</sup> <a name="LastResizeTimestamp" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```csharp
public string LastResizeTimestamp { get; }
```

- *Type:* string

---

##### `MaxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="MaxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```csharp
public string MaxTotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `PoolUsedCapacityBytes`<sup>Required</sup> <a name="PoolUsedCapacityBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```csharp
public string PoolUsedCapacityBytes { get; }
```

- *Type:* string

---

##### `PoolUsedIops`<sup>Required</sup> <a name="PoolUsedIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```csharp
public string PoolUsedIops { get; }
```

- *Type:* string

---

##### `PoolUsedThroughput`<sup>Required</sup> <a name="PoolUsedThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```csharp
public string PoolUsedThroughput { get; }
```

- *Type:* string

---

##### `PoolUserWrittenBytes`<sup>Required</sup> <a name="PoolUserWrittenBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```csharp
public string PoolUserWrittenBytes { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="TotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```csharp
public string TotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskIops`<sup>Required</sup> <a name="TotalProvisionedDiskIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```csharp
public string TotalProvisionedDiskIops { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskThroughput`<sup>Required</sup> <a name="TotalProvisionedDiskThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```csharp
public string TotalProvisionedDiskThroughput { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeStoragePoolResourceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolResourceStatus">DataGoogleComputeStoragePoolResourceStatus</a>

---


### DataGoogleComputeStoragePoolStatusList <a name="DataGoogleComputeStoragePoolStatusList" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.get"></a>

```csharp
private DataGoogleComputeStoragePoolStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeStoragePoolStatusOutputReference <a name="DataGoogleComputeStoragePoolStatusOutputReference" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeStoragePoolStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.diskCount">DiskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">LastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">MaxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">PoolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops">PoolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">PoolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">PoolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">TotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">TotalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">TotalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus">DataGoogleComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```csharp
public string DiskCount { get; }
```

- *Type:* string

---

##### `LastResizeTimestamp`<sup>Required</sup> <a name="LastResizeTimestamp" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```csharp
public string LastResizeTimestamp { get; }
```

- *Type:* string

---

##### `MaxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="MaxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```csharp
public string MaxTotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `PoolUsedCapacityBytes`<sup>Required</sup> <a name="PoolUsedCapacityBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```csharp
public string PoolUsedCapacityBytes { get; }
```

- *Type:* string

---

##### `PoolUsedIops`<sup>Required</sup> <a name="PoolUsedIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```csharp
public string PoolUsedIops { get; }
```

- *Type:* string

---

##### `PoolUsedThroughput`<sup>Required</sup> <a name="PoolUsedThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```csharp
public string PoolUsedThroughput { get; }
```

- *Type:* string

---

##### `PoolUserWrittenBytes`<sup>Required</sup> <a name="PoolUserWrittenBytes" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```csharp
public string PoolUserWrittenBytes { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="TotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```csharp
public string TotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskIops`<sup>Required</sup> <a name="TotalProvisionedDiskIops" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```csharp
public string TotalProvisionedDiskIops { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskThroughput`<sup>Required</sup> <a name="TotalProvisionedDiskThroughput" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```csharp
public string TotalProvisionedDiskThroughput { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeStoragePoolStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeStoragePool.DataGoogleComputeStoragePoolStatus">DataGoogleComputeStoragePoolStatus</a>

---



