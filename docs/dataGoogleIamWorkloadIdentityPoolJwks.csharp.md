# `dataGoogleIamWorkloadIdentityPoolJwks` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolJwks` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolJwks <a name="DataGoogleIamWorkloadIdentityPoolJwks" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks google_iam_workload_identity_pool_jwks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolJwks(Construct Scope, string Id, DataGoogleIamWorkloadIdentityPoolJwksConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig">DataGoogleIamWorkloadIdentityPoolJwksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig">DataGoogleIamWorkloadIdentityPoolJwksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts"></a>

```csharp
private void PutTimeouts(DataGoogleIamWorkloadIdentityPoolJwksTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolJwks.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolJwks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolJwks.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPoolJwks.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolJwks to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPoolJwks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolJwks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson">JwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys">Keys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson"></a>

```csharp
public string JwksJson { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolJwksKeysList Keys { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput"></a>

```csharp
public IResolvable|DataGoogleIamWorkloadIdentityPoolJwksTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolJwksConfig <a name="DataGoogleIamWorkloadIdentityPoolJwksConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolJwksConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceName,
    string Id = null,
    DataGoogleIamWorkloadIdentityPoolJwksTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName">ResourceName</a></code> | <code>string</code> | The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri). |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolJwksTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}

---

### DataGoogleIamWorkloadIdentityPoolJwksKeys <a name="DataGoogleIamWorkloadIdentityPoolJwksKeys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolJwksKeys {

};
```


### DataGoogleIamWorkloadIdentityPoolJwksTimeouts <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolJwksTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolJwksKeysList <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolJwksKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get"></a>

```csharp
private DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg">Alg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e">E</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty">Kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n">N</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use">Use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alg`<sup>Required</sup> <a name="Alg" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg"></a>

```csharp
public string Alg { get; }
```

- *Type:* string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e"></a>

```csharp
public string E { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty"></a>

```csharp
public string Kty { get; }
```

- *Type:* string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n"></a>

```csharp
public string N { get; }
```

- *Type:* string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use"></a>

```csharp
public string Use { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolJwksKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a>

---


### DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataGoogleIamWorkloadIdentityPoolJwksTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---



