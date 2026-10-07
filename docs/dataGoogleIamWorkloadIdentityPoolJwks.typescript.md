# `dataGoogleIamWorkloadIdentityPoolJwks` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolJwks` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolJwks <a name="DataGoogleIamWorkloadIdentityPoolJwks" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks google_iam_workload_identity_pool_jwks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

new dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolJwksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig">DataGoogleIamWorkloadIdentityPoolJwksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig">DataGoogleIamWorkloadIdentityPoolJwksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts"></a>

```typescript
public putTimeouts(value: DataGoogleIamWorkloadIdentityPoolJwksTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolJwks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPoolJwks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolJwks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys"></a>

```typescript
public readonly keys: DataGoogleIamWorkloadIdentityPoolJwksKeysList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts"></a>

```typescript
public readonly timeouts: DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataGoogleIamWorkloadIdentityPoolJwksTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolJwksConfig <a name="DataGoogleIamWorkloadIdentityPoolJwksConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

const dataGoogleIamWorkloadIdentityPoolJwksConfig: dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName">resourceName</a></code> | <code>string</code> | The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri). |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataGoogleIamWorkloadIdentityPoolJwksTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}

---

### DataGoogleIamWorkloadIdentityPoolJwksKeys <a name="DataGoogleIamWorkloadIdentityPoolJwksKeys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

const dataGoogleIamWorkloadIdentityPoolJwksKeys: dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys = { ... }
```


### DataGoogleIamWorkloadIdentityPoolJwksTimeouts <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

const dataGoogleIamWorkloadIdentityPoolJwksTimeouts: dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolJwksKeysList <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

new dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

new dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg">alg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty">kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use">use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg"></a>

```typescript
public readonly alg: string;
```

- *Type:* string

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use"></a>

```typescript
public readonly use: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolJwksKeys;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a>

---


### DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolJwks } from '@cdktn/provider-google'

new dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGoogleIamWorkloadIdentityPoolJwksTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---



