# `dataGoogleSecretManagerRegionalSecretIamPolicy` Submodule <a name="`dataGoogleSecretManagerRegionalSecretIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecretIamPolicy <a name="DataGoogleSecretManagerRegionalSecretIamPolicy" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy google_secret_manager_regional_secret_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleSecretManagerRegionalSecretIamPolicy(Construct Scope, string Id, DataGoogleSecretManagerRegionalSecretIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig">DataGoogleSecretManagerRegionalSecretIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig">DataGoogleSecretManagerRegionalSecretIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleSecretManagerRegionalSecretIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerRegionalSecretIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerRegionalSecretIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerRegionalSecretIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerRegionalSecretIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleSecretManagerRegionalSecretIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecretIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecretManagerRegionalSecretIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecretIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretIamPolicyConfig <a name="DataGoogleSecretManagerRegionalSecretIamPolicyConfig" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleSecretManagerRegionalSecretIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#secret_id DataGoogleSecretManagerRegionalSecretIamPolicy#secret_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#id DataGoogleSecretManagerRegionalSecretIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#location DataGoogleSecretManagerRegionalSecretIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#project DataGoogleSecretManagerRegionalSecretIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#secret_id DataGoogleSecretManagerRegionalSecretIamPolicy#secret_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#id DataGoogleSecretManagerRegionalSecretIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#location DataGoogleSecretManagerRegionalSecretIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecretIamPolicy.DataGoogleSecretManagerRegionalSecretIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/secret_manager_regional_secret_iam_policy#project DataGoogleSecretManagerRegionalSecretIamPolicy#project}.

---



