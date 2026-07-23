# `dataGoogleParameterManagerParameterVersion` Submodule <a name="`dataGoogleParameterManagerParameterVersion` Submodule" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerParameterVersion <a name="DataGoogleParameterManagerParameterVersion" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version google_parameter_manager_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleParameterManagerParameterVersion(Construct Scope, string Id, DataGoogleParameterManagerParameterVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig">DataGoogleParameterManagerParameterVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig">DataGoogleParameterManagerParameterVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleParameterManagerParameterVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleParameterManagerParameterVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleParameterManagerParameterVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleParameterManagerParameterVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleParameterManagerParameterVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleParameterManagerParameterVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleParameterManagerParameterVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleParameterManagerParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.disabled">Disabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterData">ParameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterInput">ParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameter">Parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterData"></a>

```csharp
public string ParameterData { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterInput"></a>

```csharp
public string ParameterInput { get; }
```

- *Type:* string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionIdInput"></a>

```csharp
public string ParameterVersionIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameter"></a>

```csharp
public string Parameter { get; }
```

- *Type:* string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerParameterVersionConfig <a name="DataGoogleParameterManagerParameterVersionConfig" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleParameterManagerParameterVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parameter,
    string ParameterVersionId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameter">Parameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#parameter DataGoogleParameterManagerParameterVersion#parameter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#parameter_version_id DataGoogleParameterManagerParameterVersion#parameter_version_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#id DataGoogleParameterManagerParameterVersion#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#project DataGoogleParameterManagerParameterVersion#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameter"></a>

```csharp
public string Parameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#parameter DataGoogleParameterManagerParameterVersion#parameter}.

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#parameter_version_id DataGoogleParameterManagerParameterVersion#parameter_version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#id DataGoogleParameterManagerParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/parameter_manager_parameter_version#project DataGoogleParameterManagerParameterVersion#project}.

---



