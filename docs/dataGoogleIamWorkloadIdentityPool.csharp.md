# `dataGoogleIamWorkloadIdentityPool` Submodule <a name="`dataGoogleIamWorkloadIdentityPool` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPool <a name="DataGoogleIamWorkloadIdentityPool" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPool(Construct Scope, string Id, DataGoogleIamWorkloadIdentityPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig">DataGoogleIamWorkloadIdentityPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig">DataGoogleIamWorkloadIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleIamWorkloadIdentityPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.attestationRules">AttestationRules</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList">DataGoogleIamWorkloadIdentityPoolAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.disabled">Disabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig">InlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineTrustConfig">InlineTrustConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AttestationRules`<sup>Required</sup> <a name="AttestationRules" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.attestationRules"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolAttestationRulesList AttestationRules { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList">DataGoogleIamWorkloadIdentityPoolAttestationRulesList</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InlineCertificateIssuanceConfig`<sup>Required</sup> <a name="InlineCertificateIssuanceConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList InlineCertificateIssuanceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList</a>

---

##### `InlineTrustConfig`<sup>Required</sup> <a name="InlineTrustConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.inlineTrustConfig"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList InlineTrustConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolAttestationRules <a name="DataGoogleIamWorkloadIdentityPoolAttestationRules" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolAttestationRules {

};
```


### DataGoogleIamWorkloadIdentityPoolConfig <a name="DataGoogleIamWorkloadIdentityPoolConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string WorkloadIdentityPoolId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iam_workload_identity_pool#workload_identity_pool_id DataGoogleIamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}.

---

### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig {

};
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfig <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfig {

};
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles {

};
```


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolAttestationRulesList <a name="DataGoogleIamWorkloadIdentityPoolAttestationRulesList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolAttestationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.get"></a>

```csharp
private DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference <a name="DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource">GoogleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRules">DataGoogleIamWorkloadIdentityPoolAttestationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource"></a>

```csharp
public string GoogleCloudResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolAttestationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolAttestationRules">DataGoogleIamWorkloadIdentityPoolAttestationRules</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get"></a>

```csharp
private DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools">CaPools</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa">UseDefaultSharedCa</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaPools`<sup>Required</sup> <a name="CaPools" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools"></a>

```csharp
public StringMap CaPools { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; }
```

- *Type:* double

---

##### `UseDefaultSharedCa`<sup>Required</sup> <a name="UseDefaultSharedCa" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa"></a>

```csharp
public IResolvable UseDefaultSharedCa { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">DataGoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get"></a>

```csharp
private DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors">TrustAnchors</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa">TrustDefaultSharedCa</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain">TrustDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList TrustAnchors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a>

---

##### `TrustDefaultSharedCa`<sup>Required</sup> <a name="TrustDefaultSharedCa" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa"></a>

```csharp
public IResolvable TrustDefaultSharedCa { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain"></a>

```csharp
public string TrustDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get"></a>

```csharp
private DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get"></a>

```csharp
private DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference <a name="DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles">AdditionalTrustBundles</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig">DataGoogleIamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalTrustBundles`<sup>Required</sup> <a name="AdditionalTrustBundles" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList AdditionalTrustBundles { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">DataGoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleIamWorkloadIdentityPoolInlineTrustConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPool.DataGoogleIamWorkloadIdentityPoolInlineTrustConfig">DataGoogleIamWorkloadIdentityPoolInlineTrustConfig</a>

---



