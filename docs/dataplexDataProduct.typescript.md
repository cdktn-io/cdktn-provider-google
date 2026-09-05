# `dataplexDataProduct` Submodule <a name="`dataplexDataProduct` Submodule" id="@cdktn/provider-google.dataplexDataProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDataProduct <a name="DataplexDataProduct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product google_dataplex_data_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

new dataplexDataProduct.DataplexDataProduct(scope: Construct, id: string, config: DataplexDataProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig">DataplexDataProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig">DataplexDataProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig">putAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups">putAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig">resetAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups">resetAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessApprovalConfig` <a name="putAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig"></a>

```typescript
public putAccessApprovalConfig(value: DataplexDataProductAccessApprovalConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---

##### `putAccessGroups` <a name="putAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups"></a>

```typescript
public putAccessGroups(value: IResolvable | DataplexDataProductAccessGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplexDataProductTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---

##### `resetAccessApprovalConfig` <a name="resetAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig"></a>

```typescript
public resetAccessApprovalConfig(): void
```

##### `resetAccessGroups` <a name="resetAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups"></a>

```typescript
public resetAccessGroups(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIcon` <a name="resetIcon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon"></a>

```typescript
public resetIcon(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

dataplexDataProduct.DataplexDataProduct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

dataplexDataProduct.DataplexDataProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

dataplexDataProduct.DataplexDataProduct.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

dataplexDataProduct.DataplexDataProduct.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexDataProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexDataProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexDataProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups">accessGroups</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount">assetCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput">accessApprovalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput">accessGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput">dataProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput">iconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput">ownerEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId">dataProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon">icon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails">ownerEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessApprovalConfig`<sup>Required</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig"></a>

```typescript
public readonly accessApprovalConfig: DataplexDataProductAccessApprovalConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a>

---

##### `accessGroups`<sup>Required</sup> <a name="accessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups"></a>

```typescript
public readonly accessGroups: DataplexDataProductAccessGroupsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a>

---

##### `assetCount`<sup>Required</sup> <a name="assetCount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount"></a>

```typescript
public readonly assetCount: number;
```

- *Type:* number

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexDataProductTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessApprovalConfigInput`<sup>Optional</sup> <a name="accessApprovalConfigInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput"></a>

```typescript
public readonly accessApprovalConfigInput: DataplexDataProductAccessApprovalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---

##### `accessGroupsInput`<sup>Optional</sup> <a name="accessGroupsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput"></a>

```typescript
public readonly accessGroupsInput: IResolvable | DataplexDataProductAccessGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

---

##### `dataProductIdInput`<sup>Optional</sup> <a name="dataProductIdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput"></a>

```typescript
public readonly dataProductIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput"></a>

```typescript
public readonly iconInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `ownerEmailsInput`<sup>Optional</sup> <a name="ownerEmailsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput"></a>

```typescript
public readonly ownerEmailsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplexDataProductTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId"></a>

```typescript
public readonly dataProductId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails"></a>

```typescript
public readonly ownerEmails: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDataProductAccessApprovalConfig <a name="DataplexDataProductAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

const dataplexDataProductAccessApprovalConfig: dataplexDataProduct.DataplexDataProductAccessApprovalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails">approverEmails</a></code> | <code>string[]</code> | Specifies the email addresses of users who are potential approvers. |

---

##### `approverEmails`<sup>Optional</sup> <a name="approverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails"></a>

```typescript
public readonly approverEmails: string[];
```

- *Type:* string[]

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#approver_emails DataplexDataProduct#approver_emails}

---

### DataplexDataProductAccessGroups <a name="DataplexDataProductAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

const dataplexDataProductAccessGroups: dataplexDataProduct.DataplexDataProductAccessGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName">displayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId">groupId</a></code> | <code>string</code> | Unique identifier of the access group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | principal block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description">description</a></code> | <code>string</code> | Description of the access group. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Unique identifier of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#group_id DataplexDataProduct#group_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal"></a>

```typescript
public readonly principal: DataplexDataProductAccessGroupsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#principal DataplexDataProduct#principal}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

### DataplexDataProductAccessGroupsPrincipal <a name="DataplexDataProductAccessGroupsPrincipal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

const dataplexDataProductAccessGroupsPrincipal: dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup">googleGroup</a></code> | <code>string</code> | Email of the Google Group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Specifies the email of the producer service account. |

---

##### `googleGroup`<sup>Optional</sup> <a name="googleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup"></a>

```typescript
public readonly googleGroup: string;
```

- *Type:* string

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#google_group DataplexDataProduct#google_group}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#service_account DataplexDataProduct#service_account}

---

### DataplexDataProductConfig <a name="DataplexDataProductConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

const dataplexDataProductConfig: dataplexDataProduct.DataplexDataProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId">dataProductId</a></code> | <code>string</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName">displayName</a></code> | <code>string</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location">location</a></code> | <code>string</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails">ownerEmails</a></code> | <code>string[]</code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups">accessGroups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]</code> | access_groups block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description">description</a></code> | <code>string</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon">icon</a></code> | <code>string</code> | Base64 encoded image representing the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#project DataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId"></a>

```typescript
public readonly dataProductId: string;
```

- *Type:* string

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#data_product_id DataplexDataProduct#data_product_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#location DataplexDataProduct#location}

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails"></a>

```typescript
public readonly ownerEmails: string[];
```

- *Type:* string[]

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#owner_emails DataplexDataProduct#owner_emails}

---

##### `accessApprovalConfig`<sup>Optional</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig"></a>

```typescript
public readonly accessApprovalConfig: DataplexDataProductAccessApprovalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#access_approval_config DataplexDataProduct#access_approval_config}

---

##### `accessGroups`<sup>Optional</sup> <a name="accessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups"></a>

```typescript
public readonly accessGroups: IResolvable | DataplexDataProductAccessGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#access_groups DataplexDataProduct#access_groups}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#deletion_policy DataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

Base64 encoded image representing the data product.

Max Size: 3.0MiB
Expected image dimensions are 512x512 pixels, however the API only
performs validation on size of the encoded data.
Note: For byte fields, the content of the fields are base64-encoded (which
increases the size of the data by 33-36%) when using JSON on the wire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#icon DataplexDataProduct#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#labels DataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#project DataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexDataProductTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#timeouts DataplexDataProduct#timeouts}

---

### DataplexDataProductTimeouts <a name="DataplexDataProductTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

const dataplexDataProductTimeouts: dataplexDataProduct.DataplexDataProductTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#create DataplexDataProduct#create}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#update DataplexDataProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#create DataplexDataProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataplex_data_product#update DataplexDataProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDataProductAccessApprovalConfigOutputReference <a name="DataplexDataProductAccessApprovalConfigOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

new dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails">resetApproverEmails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApproverEmails` <a name="resetApproverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails"></a>

```typescript
public resetApproverEmails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput">approverEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails">approverEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approverEmailsInput`<sup>Optional</sup> <a name="approverEmailsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput"></a>

```typescript
public readonly approverEmailsInput: string[];
```

- *Type:* string[]

---

##### `approverEmails`<sup>Required</sup> <a name="approverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails"></a>

```typescript
public readonly approverEmails: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexDataProductAccessApprovalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---


### DataplexDataProductAccessGroupsList <a name="DataplexDataProductAccessGroupsList" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

new dataplexDataProduct.DataplexDataProductAccessGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get"></a>

```typescript
public get(index: number): DataplexDataProductAccessGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexDataProductAccessGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>[]

---


### DataplexDataProductAccessGroupsOutputReference <a name="DataplexDataProductAccessGroupsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

new dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal"></a>

```typescript
public putPrincipal(value: DataplexDataProductAccessGroupsPrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput">principalInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal"></a>

```typescript
public readonly principal: DataplexDataProductAccessGroupsPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: DataplexDataProductAccessGroupsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexDataProductAccessGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>

---


### DataplexDataProductAccessGroupsPrincipalOutputReference <a name="DataplexDataProductAccessGroupsPrincipalOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

new dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup">resetGoogleGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGoogleGroup` <a name="resetGoogleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup"></a>

```typescript
public resetGoogleGroup(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput">googleGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup">googleGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleGroupInput`<sup>Optional</sup> <a name="googleGroupInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput"></a>

```typescript
public readonly googleGroupInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `googleGroup`<sup>Required</sup> <a name="googleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup"></a>

```typescript
public readonly googleGroup: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexDataProductAccessGroupsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---


### DataplexDataProductTimeoutsOutputReference <a name="DataplexDataProductTimeoutsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplexDataProduct } from '@cdktn/provider-google'

new dataplexDataProduct.DataplexDataProductTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexDataProductTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---



