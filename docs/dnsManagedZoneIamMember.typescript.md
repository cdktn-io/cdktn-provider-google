# `dnsManagedZoneIamMember` Submodule <a name="`dnsManagedZoneIamMember` Submodule" id="@cdktn/provider-google.dnsManagedZoneIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsManagedZoneIamMember <a name="DnsManagedZoneIamMember" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member google_dns_managed_zone_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

new dnsManagedZoneIamMember.DnsManagedZoneIamMember(scope: Construct, id: string, config: DnsManagedZoneIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig">DnsManagedZoneIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig">DnsManagedZoneIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.putCondition"></a>

```typescript
public putCondition(value: DnsManagedZoneIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DnsManagedZoneIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isConstruct"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

dnsManagedZoneIamMember.DnsManagedZoneIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformElement"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformResource"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.generateConfigForImport"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

dnsManagedZoneIamMember.DnsManagedZoneIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DnsManagedZoneIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsManagedZoneIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsManagedZoneIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DnsManagedZoneIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference">DnsManagedZoneIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZoneInput">managedZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZone">managedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.condition"></a>

```typescript
public readonly condition: DnsManagedZoneIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference">DnsManagedZoneIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: DnsManagedZoneIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedZoneInput`<sup>Optional</sup> <a name="managedZoneInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZoneInput"></a>

```typescript
public readonly managedZoneInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedZone`<sup>Required</sup> <a name="managedZone" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZone"></a>

```typescript
public readonly managedZone: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsManagedZoneIamMemberCondition <a name="DnsManagedZoneIamMemberCondition" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.Initializer"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

const dnsManagedZoneIamMemberCondition: dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#expression DnsManagedZoneIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#title DnsManagedZoneIamMember#title}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#description DnsManagedZoneIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#expression DnsManagedZoneIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#title DnsManagedZoneIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#description DnsManagedZoneIamMember#description}.

---

### DnsManagedZoneIamMemberConfig <a name="DnsManagedZoneIamMemberConfig" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.Initializer"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

const dnsManagedZoneIamMemberConfig: dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.managedZone">managedZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#managed_zone DnsManagedZoneIamMember#managed_zone}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#member DnsManagedZoneIamMember#member}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#role DnsManagedZoneIamMember#role}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#id DnsManagedZoneIamMember#id}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#project DnsManagedZoneIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `managedZone`<sup>Required</sup> <a name="managedZone" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.managedZone"></a>

```typescript
public readonly managedZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#managed_zone DnsManagedZoneIamMember#managed_zone}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#member DnsManagedZoneIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#role DnsManagedZoneIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: DnsManagedZoneIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#condition DnsManagedZoneIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#id DnsManagedZoneIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_managed_zone_iam_member#project DnsManagedZoneIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsManagedZoneIamMemberConditionOutputReference <a name="DnsManagedZoneIamMemberConditionOutputReference" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { dnsManagedZoneIamMember } from '@cdktn/provider-google'

new dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsManagedZoneIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

---



