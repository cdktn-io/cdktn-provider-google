# `dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/iam_workload_identity_pool_openid_config google_iam_workload_identity_pool_openid_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolOpenidConfig(Construct Scope, string Id, DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig">DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig">DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolOpenidConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolOpenidConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolOpenidConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolOpenidConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPoolOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/iam_workload_identity_pool_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported">IdTokenSigningAlgValuesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri">JwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported">ResponseTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported">SubjectTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `IdTokenSigningAlgValuesSupported`<sup>Required</sup> <a name="IdTokenSigningAlgValuesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```csharp
public string[] IdTokenSigningAlgValuesSupported { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri"></a>

```csharp
public string JwksUri { get; }
```

- *Type:* string

---

##### `ResponseTypesSupported`<sup>Required</sup> <a name="ResponseTypesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported"></a>

```csharp
public string[] ResponseTypesSupported { get; }
```

- *Type:* string[]

---

##### `SubjectTypesSupported`<sup>Required</sup> <a name="SubjectTypesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported"></a>

```csharp
public string[] SubjectTypesSupported { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName">ResourceName</a></code> | <code>string</code> | The OIDC discovery URI. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

The OIDC discovery URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/iam_workload_identity_pool_openid_config#resource_name DataGoogleIamWorkloadIdentityPoolOpenidConfig#resource_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



