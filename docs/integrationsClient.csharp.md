# `integrationsClient` Submodule <a name="`integrationsClient` Submodule" id="@cdktn/provider-google.integrationsClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationsClient <a name="IntegrationsClient" id="@cdktn/provider-google.integrationsClient.IntegrationsClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client google_integrations_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IntegrationsClient(Construct Scope, string Id, IntegrationsClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig">IntegrationsClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig">IntegrationsClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig">PutCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetCloudKmsConfig">ResetCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleIntegrations">ResetCreateSampleIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetRunAsServiceAccount">ResetRunAsServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudKmsConfig` <a name="PutCloudKmsConfig" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig"></a>

```csharp
private void PutCloudKmsConfig(IntegrationsClientCloudKmsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.putTimeouts"></a>

```csharp
private void PutTimeouts(IntegrationsClientTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---

##### `ResetCloudKmsConfig` <a name="ResetCloudKmsConfig" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetCloudKmsConfig"></a>

```csharp
private void ResetCloudKmsConfig()
```

##### `ResetCreateSampleIntegrations` <a name="ResetCreateSampleIntegrations" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleIntegrations"></a>

```csharp
private void ResetCreateSampleIntegrations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRunAsServiceAccount` <a name="ResetRunAsServiceAccount" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetRunAsServiceAccount"></a>

```csharp
private void ResetRunAsServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationsClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IntegrationsClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IntegrationsClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IntegrationsClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IntegrationsClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IntegrationsClient resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationsClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationsClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationsClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfig">CloudKmsConfig</a></code> | <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference">IntegrationsClientCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference">IntegrationsClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfigInput">CloudKmsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrationsInput">CreateSampleIntegrationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccountInput">RunAsServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrations">CreateSampleIntegrations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccount">RunAsServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudKmsConfig`<sup>Required</sup> <a name="CloudKmsConfig" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfig"></a>

```csharp
public IntegrationsClientCloudKmsConfigOutputReference CloudKmsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference">IntegrationsClientCloudKmsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.timeouts"></a>

```csharp
public IntegrationsClientTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference">IntegrationsClientTimeoutsOutputReference</a>

---

##### `CloudKmsConfigInput`<sup>Optional</sup> <a name="CloudKmsConfigInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfigInput"></a>

```csharp
public IntegrationsClientCloudKmsConfig CloudKmsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---

##### `CreateSampleIntegrationsInput`<sup>Optional</sup> <a name="CreateSampleIntegrationsInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrationsInput"></a>

```csharp
public bool|IResolvable CreateSampleIntegrationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RunAsServiceAccountInput`<sup>Optional</sup> <a name="RunAsServiceAccountInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccountInput"></a>

```csharp
public string RunAsServiceAccountInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.timeoutsInput"></a>

```csharp
public IResolvable|IntegrationsClientTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---

##### `CreateSampleIntegrations`<sup>Required</sup> <a name="CreateSampleIntegrations" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrations"></a>

```csharp
public bool|IResolvable CreateSampleIntegrations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RunAsServiceAccount`<sup>Required</sup> <a name="RunAsServiceAccount" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccount"></a>

```csharp
public string RunAsServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.integrationsClient.IntegrationsClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationsClientCloudKmsConfig <a name="IntegrationsClientCloudKmsConfig" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IntegrationsClientCloudKmsConfig {
    string Key,
    string KmsLocation,
    string KmsRing,
    string KeyVersion = null,
    string KmsProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.key">Key</a></code> | <code>string</code> | A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsLocation">KmsLocation</a></code> | <code>string</code> | Location name of the key ring, e.g. "us-west1". |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsRing">KmsRing</a></code> | <code>string</code> | A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.keyVersion">KeyVersion</a></code> | <code>string</code> | Each version of a key contains key material used for encryption or signing. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsProjectId">KmsProjectId</a></code> | <code>string</code> | The Google Cloud project id of the project where the kms key stored. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key.

A key exists on exactly one key ring tied to a
specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#key IntegrationsClient#key}

---

##### `KmsLocation`<sup>Required</sup> <a name="KmsLocation" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsLocation"></a>

```csharp
public string KmsLocation { get; set; }
```

- *Type:* string

Location name of the key ring, e.g. "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#kms_location IntegrationsClient#kms_location}

---

##### `KmsRing`<sup>Required</sup> <a name="KmsRing" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsRing"></a>

```csharp
public string KmsRing { get; set; }
```

- *Type:* string

A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys.

A key ring's name does not need to be
unique across a Google Cloud project, but must be unique within a given location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#kms_ring IntegrationsClient#kms_ring}

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.keyVersion"></a>

```csharp
public string KeyVersion { get; set; }
```

- *Type:* string

Each version of a key contains key material used for encryption or signing.

A key's version is represented by an integer, starting at 1. To decrypt data
or verify a signature, you must use the same key version that was used to
encrypt or sign the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#key_version IntegrationsClient#key_version}

---

##### `KmsProjectId`<sup>Optional</sup> <a name="KmsProjectId" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsProjectId"></a>

```csharp
public string KmsProjectId { get; set; }
```

- *Type:* string

The Google Cloud project id of the project where the kms key stored.

If empty,
the kms key is stored at the same project as customer's project and ecrypted
with CMEK, otherwise, the kms key is stored in the tenant project and
encrypted with GMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#kms_project_id IntegrationsClient#kms_project_id}

---

### IntegrationsClientConfig <a name="IntegrationsClientConfig" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IntegrationsClientConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    IntegrationsClientCloudKmsConfig CloudKmsConfig = null,
    bool|IResolvable CreateSampleIntegrations = null,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    string RunAsServiceAccount = null,
    IntegrationsClientTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.location">Location</a></code> | <code>string</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.cloudKmsConfig">CloudKmsConfig</a></code> | <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleIntegrations">CreateSampleIntegrations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#id IntegrationsClient#id}. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#project IntegrationsClient#project}. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.runAsServiceAccount">RunAsServiceAccount</a></code> | <code>string</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#location IntegrationsClient#location}

---

##### `CloudKmsConfig`<sup>Optional</sup> <a name="CloudKmsConfig" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.cloudKmsConfig"></a>

```csharp
public IntegrationsClientCloudKmsConfig CloudKmsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#cloud_kms_config IntegrationsClient#cloud_kms_config}

---

##### `CreateSampleIntegrations`<sup>Optional</sup> <a name="CreateSampleIntegrations" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleIntegrations"></a>

```csharp
public bool|IResolvable CreateSampleIntegrations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#create_sample_integrations IntegrationsClient#create_sample_integrations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#deletion_policy IntegrationsClient#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#id IntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#project IntegrationsClient#project}.

---

##### `RunAsServiceAccount`<sup>Optional</sup> <a name="RunAsServiceAccount" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.runAsServiceAccount"></a>

```csharp
public string RunAsServiceAccount { get; set; }
```

- *Type:* string

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#run_as_service_account IntegrationsClient#run_as_service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.integrationsClient.IntegrationsClientConfig.property.timeouts"></a>

```csharp
public IntegrationsClientTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#timeouts IntegrationsClient#timeouts}

---

### IntegrationsClientTimeouts <a name="IntegrationsClientTimeouts" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IntegrationsClientTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#create IntegrationsClient#create}. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#delete IntegrationsClient#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#create IntegrationsClient#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/integrations_client#delete IntegrationsClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationsClientCloudKmsConfigOutputReference <a name="IntegrationsClientCloudKmsConfigOutputReference" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IntegrationsClientCloudKmsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId">ResetKmsProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetKmsProjectId` <a name="ResetKmsProjectId" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId"></a>

```csharp
private void ResetKmsProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput">KeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput">KmsLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput">KmsProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput">KmsRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersion">KeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation">KmsLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId">KmsProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRing">KmsRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput"></a>

```csharp
public string KeyVersionInput { get; }
```

- *Type:* string

---

##### `KmsLocationInput`<sup>Optional</sup> <a name="KmsLocationInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput"></a>

```csharp
public string KmsLocationInput { get; }
```

- *Type:* string

---

##### `KmsProjectIdInput`<sup>Optional</sup> <a name="KmsProjectIdInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput"></a>

```csharp
public string KmsProjectIdInput { get; }
```

- *Type:* string

---

##### `KmsRingInput`<sup>Optional</sup> <a name="KmsRingInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput"></a>

```csharp
public string KmsRingInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersion"></a>

```csharp
public string KeyVersion { get; }
```

- *Type:* string

---

##### `KmsLocation`<sup>Required</sup> <a name="KmsLocation" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation"></a>

```csharp
public string KmsLocation { get; }
```

- *Type:* string

---

##### `KmsProjectId`<sup>Required</sup> <a name="KmsProjectId" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId"></a>

```csharp
public string KmsProjectId { get; }
```

- *Type:* string

---

##### `KmsRing`<sup>Required</sup> <a name="KmsRing" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRing"></a>

```csharp
public string KmsRing { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.internalValue"></a>

```csharp
public IntegrationsClientCloudKmsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---


### IntegrationsClientTimeoutsOutputReference <a name="IntegrationsClientTimeoutsOutputReference" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IntegrationsClientTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationsClientTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---



