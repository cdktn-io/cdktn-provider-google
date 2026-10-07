# `biglakeHiveCatalogIamPolicy` Submodule <a name="`biglakeHiveCatalogIamPolicy` Submodule" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveCatalogIamPolicy <a name="BiglakeHiveCatalogIamPolicy" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy google_biglake_hive_catalog_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.Initializer"></a>

```typescript
import { biglakeHiveCatalogIamPolicy } from '@cdktn/provider-google'

new biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy(scope: Construct, id: string, config: BiglakeHiveCatalogIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig">BiglakeHiveCatalogIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig">BiglakeHiveCatalogIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveCatalogIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isConstruct"></a>

```typescript
import { biglakeHiveCatalogIamPolicy } from '@cdktn/provider-google'

biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformElement"></a>

```typescript
import { biglakeHiveCatalogIamPolicy } from '@cdktn/provider-google'

biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformResource"></a>

```typescript
import { biglakeHiveCatalogIamPolicy } from '@cdktn/provider-google'

biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.generateConfigForImport"></a>

```typescript
import { biglakeHiveCatalogIamPolicy } from '@cdktn/provider-google'

biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BiglakeHiveCatalogIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeHiveCatalogIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeHiveCatalogIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveCatalogIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveCatalogIamPolicyConfig <a name="BiglakeHiveCatalogIamPolicyConfig" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.Initializer"></a>

```typescript
import { biglakeHiveCatalogIamPolicy } from '@cdktn/provider-google'

const biglakeHiveCatalogIamPolicyConfig: biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#name BiglakeHiveCatalogIamPolicy#name}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#policy_data BiglakeHiveCatalogIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#id BiglakeHiveCatalogIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#project BiglakeHiveCatalogIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#name BiglakeHiveCatalogIamPolicy#name}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#policy_data BiglakeHiveCatalogIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#id BiglakeHiveCatalogIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalogIamPolicy.BiglakeHiveCatalogIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog_iam_policy#project BiglakeHiveCatalogIamPolicy#project}.

---



