# `dataplexDataProductDataAsset` Submodule <a name="`dataplexDataProductDataAsset` Submodule" id="@cdktn/provider-google.dataplexDataProductDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDataProductDataAsset <a name="DataplexDataProductDataAsset" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset google_dataplex_data_product_data_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

new dataplexDataProductDataAsset.DataplexDataProductDataAsset(scope: Construct, id: string, config: DataplexDataProductDataAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig">DataplexDataProductDataAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig">DataplexDataProductDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putAccessGroupConfigs">putAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetAccessGroupConfigs">resetAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessGroupConfigs` <a name="putAccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putAccessGroupConfigs"></a>

```typescript
public putAccessGroupConfigs(value: IResolvable | DataplexDataProductDataAssetAccessGroupConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putAccessGroupConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplexDataProductDataAssetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

---

##### `resetAccessGroupConfigs` <a name="resetAccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetAccessGroupConfigs"></a>

```typescript
public resetAccessGroupConfigs(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isConstruct"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

dataplexDataProductDataAsset.DataplexDataProductDataAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformElement"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformResource"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexDataProductDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexDataProductDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexDataProductDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigs">accessGroupConfigs</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList">DataplexDataProductDataAssetAccessGroupConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference">DataplexDataProductDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigsInput">accessGroupConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetIdInput">dataAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductIdInput">dataProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetId">dataAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductId">dataProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resource">resource</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessGroupConfigs`<sup>Required</sup> <a name="accessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigs"></a>

```typescript
public readonly accessGroupConfigs: DataplexDataProductDataAssetAccessGroupConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList">DataplexDataProductDataAssetAccessGroupConfigsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexDataProductDataAssetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference">DataplexDataProductDataAssetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `accessGroupConfigsInput`<sup>Optional</sup> <a name="accessGroupConfigsInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.accessGroupConfigsInput"></a>

```typescript
public readonly accessGroupConfigsInput: IResolvable | DataplexDataProductDataAssetAccessGroupConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `dataAssetIdInput`<sup>Optional</sup> <a name="dataAssetIdInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetIdInput"></a>

```typescript
public readonly dataAssetIdInput: string;
```

- *Type:* string

---

##### `dataProductIdInput`<sup>Optional</sup> <a name="dataProductIdInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductIdInput"></a>

```typescript
public readonly dataProductIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplexDataProductDataAssetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataAssetId"></a>

```typescript
public readonly dataAssetId: string;
```

- *Type:* string

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.dataProductId"></a>

```typescript
public readonly dataProductId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDataProductDataAssetAccessGroupConfigs <a name="DataplexDataProductDataAssetAccessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.Initializer"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

const dataplexDataProductDataAssetAccessGroupConfigs: dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup">accessGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#access_group DataplexDataProductDataAsset#access_group}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | IAM roles granted on the resource. |

---

##### `accessGroup`<sup>Required</sup> <a name="accessGroup" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup"></a>

```typescript
public readonly accessGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#access_group DataplexDataProductDataAsset#access_group}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

IAM roles granted on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#iam_roles DataplexDataProductDataAsset#iam_roles}

---

### DataplexDataProductDataAssetConfig <a name="DataplexDataProductDataAssetConfig" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.Initializer"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

const dataplexDataProductDataAssetConfig: dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataAssetId">dataAssetId</a></code> | <code>string</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataProductId">dataProductId</a></code> | <code>string</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.location">location</a></code> | <code>string</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.resource">resource</a></code> | <code>string</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.accessGroupConfigs">accessGroupConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#id DataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#project DataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataAssetId"></a>

```typescript
public readonly dataAssetId: string;
```

- *Type:* string

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#data_asset_id DataplexDataProductDataAsset#data_asset_id}

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.dataProductId"></a>

```typescript
public readonly dataProductId: string;
```

- *Type:* string

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#data_product_id DataplexDataProductDataAsset#data_product_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#location DataplexDataProductDataAsset#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#resource DataplexDataProductDataAsset#resource}

---

##### `accessGroupConfigs`<sup>Optional</sup> <a name="accessGroupConfigs" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.accessGroupConfigs"></a>

```typescript
public readonly accessGroupConfigs: IResolvable | DataplexDataProductDataAssetAccessGroupConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#access_group_configs DataplexDataProductDataAsset#access_group_configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#deletion_policy DataplexDataProductDataAsset#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#id DataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#labels DataplexDataProductDataAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#project DataplexDataProductDataAsset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexDataProductDataAssetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#timeouts DataplexDataProductDataAsset#timeouts}

---

### DataplexDataProductDataAssetTimeouts <a name="DataplexDataProductDataAssetTimeouts" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.Initializer"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

const dataplexDataProductDataAssetTimeouts: dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#create DataplexDataProductDataAsset#create}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#delete DataplexDataProductDataAsset#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#update DataplexDataProductDataAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#create DataplexDataProductDataAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#delete DataplexDataProductDataAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dataplex_data_product_data_asset#update DataplexDataProductDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDataProductDataAssetAccessGroupConfigsList <a name="DataplexDataProductDataAssetAccessGroupConfigsList" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

new dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.get"></a>

```typescript
public get(index: number): DataplexDataProductDataAssetAccessGroupConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexDataProductDataAssetAccessGroupConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>[]

---


### DataplexDataProductDataAssetAccessGroupConfigsOutputReference <a name="DataplexDataProductDataAssetAccessGroupConfigsOutputReference" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

new dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles">resetIamRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput">accessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput">iamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup">accessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessGroupInput`<sup>Optional</sup> <a name="accessGroupInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput"></a>

```typescript
public readonly accessGroupInput: string;
```

- *Type:* string

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: string[];
```

- *Type:* string[]

---

##### `accessGroup`<sup>Required</sup> <a name="accessGroup" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup"></a>

```typescript
public readonly accessGroup: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexDataProductDataAssetAccessGroupConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetAccessGroupConfigs">DataplexDataProductDataAssetAccessGroupConfigs</a>

---


### DataplexDataProductDataAssetTimeoutsOutputReference <a name="DataplexDataProductDataAssetTimeoutsOutputReference" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplexDataProductDataAsset } from '@cdktn/provider-google'

new dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexDataProductDataAssetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProductDataAsset.DataplexDataProductDataAssetTimeouts">DataplexDataProductDataAssetTimeouts</a>

---



