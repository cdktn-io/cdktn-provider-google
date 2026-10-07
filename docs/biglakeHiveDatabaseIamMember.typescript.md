# `biglakeHiveDatabaseIamMember` Submodule <a name="`biglakeHiveDatabaseIamMember` Submodule" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveDatabaseIamMember <a name="BiglakeHiveDatabaseIamMember" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member google_biglake_hive_database_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

new biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember(scope: Construct, id: string, config: BiglakeHiveDatabaseIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig">BiglakeHiveDatabaseIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig">BiglakeHiveDatabaseIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.putCondition"></a>

```typescript
public putCondition(value: BiglakeHiveDatabaseIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveDatabaseIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isConstruct"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformElement"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformResource"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BiglakeHiveDatabaseIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeHiveDatabaseIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeHiveDatabaseIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveDatabaseIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference">BiglakeHiveDatabaseIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.condition"></a>

```typescript
public readonly condition: BiglakeHiveDatabaseIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference">BiglakeHiveDatabaseIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: BiglakeHiveDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveDatabaseIamMemberCondition <a name="BiglakeHiveDatabaseIamMemberCondition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.Initializer"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

const biglakeHiveDatabaseIamMemberCondition: biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#expression BiglakeHiveDatabaseIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#title BiglakeHiveDatabaseIamMember#title}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#description BiglakeHiveDatabaseIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#expression BiglakeHiveDatabaseIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#title BiglakeHiveDatabaseIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#description BiglakeHiveDatabaseIamMember#description}.

---

### BiglakeHiveDatabaseIamMemberConfig <a name="BiglakeHiveDatabaseIamMemberConfig" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.Initializer"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

const biglakeHiveDatabaseIamMemberConfig: biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#catalog BiglakeHiveDatabaseIamMember#catalog}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#member BiglakeHiveDatabaseIamMember#member}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#name BiglakeHiveDatabaseIamMember#name}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#role BiglakeHiveDatabaseIamMember#role}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#id BiglakeHiveDatabaseIamMember#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#project BiglakeHiveDatabaseIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#catalog BiglakeHiveDatabaseIamMember#catalog}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#member BiglakeHiveDatabaseIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#name BiglakeHiveDatabaseIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#role BiglakeHiveDatabaseIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: BiglakeHiveDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#condition BiglakeHiveDatabaseIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#id BiglakeHiveDatabaseIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#project BiglakeHiveDatabaseIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveDatabaseIamMemberConditionOutputReference <a name="BiglakeHiveDatabaseIamMemberConditionOutputReference" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { biglakeHiveDatabaseIamMember } from '@cdktn/provider-google'

new biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeHiveDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

---



